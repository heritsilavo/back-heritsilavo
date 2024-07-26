// src/invitations/invitation.controller.ts
import { Controller, Post, Get, Param, Body, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { InvitationService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Invitation } from './schemas/invitation.schema';
import { UserService } from 'src/user/user.service';

@Controller('invitations')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService, private readonly usersService: UserService,) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle invitation' })
  @ApiBody({ type: CreateInvitationDto })
  @ApiResponse({ status: 201, description: 'Invitation créée avec succès' })
  async create(@Body() createInvitationDto: CreateInvitationDto): Promise<Invitation> {
    return this.invitationService.create(createInvitationDto);
  }

  @Get('sent/:userId')
  @ApiOperation({ summary: 'Récupérer les invitations envoyées par un utilisateur' })
  @ApiResponse({ status: 200, description: 'Liste des invitations envoyées récupérée avec succès' })
  async findSentInvitations(@Param('userId') userId: string): Promise<Invitation[]> {
    return this.invitationService.findSentInvitations(userId);
  }

  @Get('received/:userId')
  @ApiOperation({ summary: 'Récupérer les invitations reçues par un utilisateur' })
  @ApiResponse({ status: 200, description: 'Liste des invitations reçues récupérée avec succès' })
  async findReceivedInvitations(@Param('userId') userId: string): Promise<Invitation[]> {
    return this.invitationService.findReceivedInvitations(userId);
  }

  @Patch(':invitationId')
  @ApiOperation({ summary: 'Mettre à jour le statut d\'une invitation' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', enum: ['accepted', 'rejected'] },
      },
      required: ['status'],
    },
  })
  @ApiResponse({ status: 200, description: 'Statut de l\'invitation mis à jour avec succès' })
  async updateStatus(
    @Param('invitationId') invitationId: string,
    @Body() body: { status: string }
  ): Promise<Invitation> {
    return this.invitationService.updateStatus(invitationId, body.status);
  }






  // Route pour accepter une invitation
  @Patch('accept/:invitationId')
  async acceptInvitation(@Param('invitationId') invitationId: string) {
    try {
      const invitation = await this.invitationService.findOne(invitationId);
      if (!invitation) {
        throw new HttpException('Invitation not found', HttpStatus.NOT_FOUND);
      }

      // Mettre à jour la liste d'amis du sender et du receiver
      await this.usersService.addFriend(invitation.senderId, invitation.receiverId);
      await this.usersService.addFriend(invitation.receiverId, invitation.senderId);

      // Supprimer l'invitation
      await this.invitationService.delete(invitationId);

      return { message: 'Invitation accepted' };
    } catch (error) {
      throw new HttpException('Could not accept invitation', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

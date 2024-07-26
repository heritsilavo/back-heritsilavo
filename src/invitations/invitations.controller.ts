// src/invitations/invitation.controller.ts
import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { InvitationService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Invitation } from './schemas/invitation.schema';

@Controller('invitations')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

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
}

// src/invitations/invitation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from './schemas/invitation.schema';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UserService } from 'src/user/user.service';
@Injectable()
export class InvitationService {
  constructor(
    @InjectModel(Invitation.name) private invitationModel: Model<InvitationDocument>,
    private readonly userService: UserService,
  ) {}

  // Méthode pour créer une nouvelle invitation
  async create(createInvitationDto: CreateInvitationDto): Promise<Invitation> {
    const { senderId, receiverId } = createInvitationDto;

    // Vérifiez si l'invitation existe déjà
    const existingInvitation = await this.invitationModel.findOne({
      senderId,
      receiverId,
    }).exec();

    if (existingInvitation) {
      // Retournez l'invitation existante si elle est trouvée
      return existingInvitation;
    }

    // Créez une nouvelle invitation si elle n'existe pas
    const createdInvitation = new this.invitationModel(createInvitationDto);
    return createdInvitation.save();
  }

  // Méthode pour récupérer les invitations envoyées par un utilisateur
  async findSentInvitations(userId: string): Promise<Invitation[]> {
    return this.invitationModel.find({ senderId: userId }).exec();
  }

  // Méthode pour récupérer les invitations reçues par un utilisateur
  async findReceivedInvitations(userId: string): Promise<any[]> {
    // Récupérer les invitations reçues par l'utilisateur
    const invitations = await this.invitationModel.find({ receiverId: userId }).exec();
    
    // Récupérer les détails des utilisateurs qui ont envoyé ces invitations
    const senderIds = invitations.map(invitation => invitation.senderId);
    const senders = await this.userService.findUsersByIds(senderIds); // Méthode à définir dans UserService
    
    // Créer un tableau de résultats combinés
    return invitations.map(invitation => {
      const sender = senders.find(user => user._id.toString() === invitation.senderId);
      
      return {
        ...invitation.toObject(),
        sender,
      };
    });
  }

  // Méthode pour mettre à jour le statut d'une invitation
  async updateStatus(invitationId: string, status: string): Promise<Invitation> {
    return this.invitationModel.findByIdAndUpdate(
      invitationId,
      { status },
      { new: true }
    ).exec();
  }
}
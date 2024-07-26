// src/invitations/invitation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from './schemas/invitation.schema';
import { CreateInvitationDto } from './dto/create-invitation.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectModel(Invitation.name) private invitationModel: Model<InvitationDocument>
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
  async findReceivedInvitations(userId: string): Promise<Invitation[]> {
    return this.invitationModel.find({ receiverId: userId }).exec();
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

// src/invitations/schemas/invitation.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type InvitationDocument = Document & Invitation;

@Schema()
export class Invitation {
  @ApiProperty({ example: 'userId123', description: 'ID de l\'expéditeur' })
  @Prop({ required: true })
  senderId: string;

  @ApiProperty({ example: 'userId456', description: 'ID du destinataire' })
  @Prop({ required: true })
  receiverId: string;

  @ApiProperty({ example: 'pending', description: 'Statut de l\'invitation' })
  @Prop({ default: 'pending' })
  status: string; // 'pending', 'accepted', 'rejected'
}

export const InvitationSchema = SchemaFactory.createForClass(Invitation);

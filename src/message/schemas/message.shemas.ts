import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type MessageDocument = Document & Message;

@Schema()
export class Message {
  @ApiProperty({ example: '2024-04-18T21:10:53.000Z', description: 'La date du message' })
  @Prop()
  date: Date;

  @ApiProperty({ example: 'inconnu', description: 'celui qui envoi le message' })
  @Prop()
  auteur: string;

  @ApiProperty({ example: 'Contenu du message', description: 'Le contenu du message' })
  @Prop()
  contenu: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
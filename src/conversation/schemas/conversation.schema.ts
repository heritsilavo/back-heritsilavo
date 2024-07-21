import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  is_group: boolean;

  @Prop({ type: [String], required: true })
  participants: String[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);

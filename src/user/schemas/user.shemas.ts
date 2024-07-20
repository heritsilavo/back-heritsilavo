import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = Document & User;

@Schema()
export class User {
  @ApiProperty({ example: 'Tsilavo', description: 'Nom de l\'utilisateur' })
  @Prop()
  username: string;

  @ApiProperty({ example: 'xxxxxx', description: 'Mot de passe' })
  @Prop()
  mdp: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
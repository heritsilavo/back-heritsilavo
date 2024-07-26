import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = Document & User;

@Schema()
export class User {
  @ApiProperty({ example: 'Tsilavo', description: 'Nom de l\'utilisateur' })
  @Prop({ required: true })
  username: string;

  @ApiProperty({ example: 'xxxxxx', description: 'Mot de passe' })
  @Prop({ required: true })
  mdp: string;

  @ApiProperty({ example: 'path/to/profile/picture', description: 'Photo de profil' })
  @Prop({ required: false, default: '' })
  pdp?: string;

  @ApiProperty({ example: ['user1', 'user2'], description: 'Liste d\'amis' })
  @Prop({ type: [String], default: [] })
  amis: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProjetDocument = Document & Projet;

@Schema()
export class Projet {
  @ApiProperty({ example: 'Mon super projet', description: 'Le titre du projet' })
  @Prop()
  title: string;

  @ApiProperty({ example: 'Ma société', description: 'La société associée au projet' })
  @Prop()
  societe: string;

  @ApiProperty({ example: 'Développeur', description: 'Le rôle dans le projet' })
  @Prop()
  role: string;

  @ApiProperty({ example: 'Description du projet', description: 'La description du projet' })
  @Prop()
  description: string;

  @ApiProperty({ example: 'https://github.com/monprojet', description: 'Lien vers le dépôt Git' })
  @Prop()
  git: string;

  @ApiProperty({ example: 'https://monprojet.com/', description: 'Lien vers le site du projet' })
  @Prop()
  link: string;

  @ApiProperty({ example: 'En cours', description: 'L\'état actuel du projet' })
  @Prop()
  etat: string;
}

export const ProjetSchema = SchemaFactory.createForClass(Projet);

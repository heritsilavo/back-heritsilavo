// offre.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type OffreDocument = Document & Offre;

@Schema()
export class Offre {
  @ApiProperty({ example: 'Plateforme de recrutement', description: 'Le titre de l\'offre' })
  @Prop()
  title: string;

  @ApiProperty({ example: 'webdevin', description: 'La société associée à l\'offre' })
  @Prop()
  client: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'Le contact pour l\'offre' })
  @Prop()
  contact: string;

  @ApiProperty({ example: '2024-04-18T21:10:53.000Z', description: 'La date de l\'offre' })
  @Prop()
  date: Date;

  @ApiProperty({ example: 'Description de l\'offre', description: 'La description de l\'offre' })
  @Prop()
  description: string;
}

export const OffreSchema = SchemaFactory.createForClass(Offre);

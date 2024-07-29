import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsUUID } from 'class-validator';

export type PostDocument = Document & Post;

@Schema()
export class Post  {
  @ApiProperty({ description: 'URL of the image' })
  @IsString()
  @Prop()
  image: string;

  @ApiProperty({ description: 'Number of votes', example: 0 })
  @IsNumber()
  @Prop()
  nbrVote: number;

  @ApiProperty({ description: 'Date of the post', example: '2023-07-21T14:48:00.000Z' })
  @IsDate()
  @Prop()
  date: Date;

  @ApiProperty({ description: 'Time of the post', example: '14:48:00' })
  @IsString()
  @Prop()
  heure: string;

  @ApiProperty({ description: 'Legend of the post' })
  @IsString()
  @Prop()
  legende: string;

  @ApiProperty({ description: 'ID of the Post', example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })
  @Prop()
  idUser: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
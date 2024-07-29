// src/post/dto/post.dto.ts

import { IsString, IsNumber, IsOptional, IsDate,IsArray } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly image: string;

  @IsNumber()
  readonly nbrVote: number;

  @IsOptional()
  @IsDate()
  readonly date?: Date;

  @IsString()
  readonly heure: string;

  @IsString()
  readonly legende: string;

  @IsString()
  readonly idUser: string;

  @IsArray()
  vontants: String[];
}

import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsNotEmpty()
  is_group: boolean;

  @IsArray()
  @IsNotEmpty()
  participants: String[];
}

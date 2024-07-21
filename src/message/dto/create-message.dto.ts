import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ description: 'ID of the conversation', example: '605c72ef4d8b8e3b2f11c8b2' })
  @IsString()
  @IsNotEmpty()
  conversation_id: string;

  @ApiProperty({ description: 'ID of the sender', example: 1 })
  @IsString()
  @IsNotEmpty()
  sender_id: String;

  @ApiProperty({ description: 'Content of the message', example: 'Hello, world!' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Timestamp of the message', example: '2024-07-21T15:00:00Z' })
  @IsDate()
  @IsNotEmpty()
  timestamp: Date;
}

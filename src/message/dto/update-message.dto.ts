import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-message.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @ApiPropertyOptional({ description: 'ID of the conversation' })
  conversation_id?: string;

  @ApiPropertyOptional({ description: 'ID of the sender' })
  sender_id?: String;

  @ApiPropertyOptional({ description: 'Content of the message' })
  content?: string;

  @ApiPropertyOptional({ description: 'Timestamp of the message' })
  timestamp?: Date;
}

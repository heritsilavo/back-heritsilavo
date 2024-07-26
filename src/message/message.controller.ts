import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './schemas/message.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({ summary: 'Create a new message' })
  @ApiResponse({ status: 201, description: 'The message has been successfully created.', type: Message })
  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
  }

  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, description: 'Return all messages.', type: [Message] })
  @Get()
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @ApiOperation({ summary: 'Get a message by ID' })
  @ApiParam({ name: 'id', description: 'ID of the message to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the message.', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Message> {
    return this.messageService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a message by ID' })
  @ApiParam({ name: 'id', description: 'ID of the message to update' })
  @ApiResponse({ status: 200, description: 'The message has been successfully updated.', type: Message })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto): Promise<Message> {
    return this.messageService.update(id, updateMessageDto);
  }

  @ApiOperation({ summary: 'Delete a message by ID' })
  @ApiParam({ name: 'id', description: 'ID of the message to delete' })
  @ApiResponse({ status: 200, description: 'The message has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.messageService.remove(id);
  }

  @ApiOperation({ summary: 'Get all messages by id conv' })
  @ApiResponse({ status: 200, description: 'Return all messages.', type: [Message] })
  @Get('findMessagesByConv/:id')
  findMessagesByConv(@Param('id') idConversation: string): Promise<Message[]> {
    return this.messageService.getMessagesByConversation(idConversation);
  }
}

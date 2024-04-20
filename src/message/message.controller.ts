import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Get()
  @ApiOperation({ summary: 'recuperer toutes les messages' })
  @ApiResponse({ status: 201, description: 'Voici toutes les messages' })
  async getAll() {
    return this.messageService.findAll()
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau message' })
  @ApiResponse({ status: 201, description: 'Le message a été créé' })
  async create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  // ... autres méthodes ...
}

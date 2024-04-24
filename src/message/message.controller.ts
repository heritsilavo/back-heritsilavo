import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Message } from './schemas/message.shemas';

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

  // Méthode pour récupérer un message par son ID
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a message by its ID' })
  async findOne(@Param('id') id: string): Promise<Message> {
    return this.messageService.findOne(id);
  }

  // Méthode pour mettre à jour un message
  @Post(':id')
  @ApiOperation({ summary: 'Update a message' })
  async update(
    @Param('id') id: string,
    @Body() updateMessageDto: CreateMessageDto,
  ): Promise<Message> {
    return this.messageService.update(id, updateMessageDto);
  }

  // Méthode pour supprimer un message
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a message' })
  async delete(@Param('id') id: string): Promise<Message> {
    return this.messageService.delete(id);
  }
}

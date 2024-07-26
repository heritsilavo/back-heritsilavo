import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './schemas/conversation.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('conversations')
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @ApiOperation({ summary: 'Create a new conversation' })
  @ApiResponse({ status: 201, description: 'The conversation has been successfully created.', type: Conversation })
  @Post()
  create(@Body() createConversationDto: CreateConversationDto): Promise<Conversation> {
    return this.conversationService.create(createConversationDto);
  }

  @ApiOperation({ summary: 'Get all conversations' })
  @ApiResponse({ status: 200, description: 'Return all conversations.', type: [Conversation] })
  @Get()
  findAll(): Promise<Conversation[]> {
    return this.conversationService.findAll();
  }

  @ApiOperation({ summary: 'Get a conversation by ID' })
  @ApiParam({ name: 'id', description: 'ID of the conversation to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the conversation.', type: Conversation })
  @ApiResponse({ status: 404, description: 'Conversation not found' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Conversation> {
    return this.conversationService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a conversation by ID' })
  @ApiParam({ name: 'id', description: 'ID of the conversation to update' })
  @ApiResponse({ status: 200, description: 'The conversation has been successfully updated.', type: Conversation })
  @ApiResponse({ status: 404, description: 'Conversation not found' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateConversationDto: UpdateConversationDto): Promise<Conversation> {
    return this.conversationService.update(id, updateConversationDto);
  }

  @ApiOperation({ summary: 'Delete a conversation by ID' })
  @ApiParam({ name: 'id', description: 'ID of the conversation to delete' })
  @ApiResponse({ status: 200, description: 'The conversation has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Conversation not found' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.conversationService.remove(id);
  }

  //checkPrivateConversationExists
  @Post('/checkPrivateConversationExists')
  checkPrivateConversationExists(@Body() {sender,receiver} : {sender:string,receiver:string}): Promise<any> {
    return this.conversationService.checkPrivateConversationExists(sender,receiver);
  }

  @ApiOperation({ summary: 'Get a conversation by ID' })
  @ApiParam({ name: 'idCurrentUser', description: '' })
  @ApiParam({ name: 'idConversation', description: '' })
  @Get('getConversationName/:idCurrentUser/:idConversation')
  getConversationName(@Param('idCurrentUser') idCurrentUser: string, @Param('idConversation') idConversation: string): Promise<String> {
    return this.conversationService.getConversationName({idCurrentUser:idCurrentUser,idConversation:idConversation});
  }
}

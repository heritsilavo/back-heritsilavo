import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { Conversation, ConversationSchema } from 'src/conversation/schemas/conversation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Conversation.name, schema: ConversationSchema }])],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule {}

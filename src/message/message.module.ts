import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { Message, MessageSchema } from './schemas/message.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),UserModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}

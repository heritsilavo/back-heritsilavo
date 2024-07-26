import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>,  private userService: UserService) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Message> {
    const message = await this.messageModel.findById(id).exec();
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return message;
  }

  async update(id: string, updateMessageDto: UpdateMessageDto): Promise<Message> {
    const updatedMessage = await this.messageModel.findByIdAndUpdate(id, updateMessageDto, { new: true }).exec();
    if (!updatedMessage) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return updatedMessage;
  }

  async remove(id: string): Promise<void> {
    const result = await this.messageModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
  }

  async getMessagesByConversation(conversationId: string): Promise<any[]> {
    const messages = await this.messageModel.find({ conversation_id: conversationId }).sort({ timestamp: 1 }).exec();
    
    const messagesWithUsernames = await Promise.all(
      messages.map(async (message) => {
        const user = await this.userService.findOne(message.sender_id.toString());
        return {
          ...message.toObject(),
          username: user.username
        };
      })
    );

    return messagesWithUsernames;
  }
  
}

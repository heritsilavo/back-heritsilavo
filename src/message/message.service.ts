import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

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

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    // Récupérer les messages triés par timestamp (les plus récents en dernier)
    const messages = await this.messageModel.find({
      where: { conversationId },
      order: { timestamp: 'ASC' }, // Tri croissant pour avoir les plus récents en dernier
    });

    return messages;
  }
}

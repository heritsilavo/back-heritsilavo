import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.shemas'
import { CreateMessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  // Méthode pour créer un nouveau message
  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(createMessageDto);
    return createdMessage.save();
  }

  // Méthode pour récupérer tous les messages
  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  // Méthode pour récupérer un message par son ID
  async findOne(id: string): Promise<Message> {
    return this.messageModel.findById(id).exec();
  }

  // Méthode pour mettre à jour un message
  async update(id: string, updateMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageModel.findByIdAndUpdate(id, updateMessageDto, { new: true }).exec();
  }

  // Méthode pour supprimer un message
  async delete(id: string): Promise<Message> {
    return this.messageModel.findByIdAndDelete(id).exec()
  }
}
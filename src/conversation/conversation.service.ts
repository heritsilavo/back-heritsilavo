import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversation, ConversationDocument } from 'src/conversation/schemas/conversation.schema';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { UserService } from 'src/user/user.service';
import { MessageService } from 'src/message/message.service';

@Injectable()
export class ConversationService {
  constructor(@InjectModel(Conversation.name) private conversationModel: Model<ConversationDocument>,
  private readonly userService: UserService,
  private readonly messageService: MessageService
) {}

  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConversation = new this.conversationModel(createConversationDto);
    return createdConversation.save();
  }

  async findAll(): Promise<Conversation[]> {
    return this.conversationModel.find().exec();
  }

  async findOne(id: string): Promise<Conversation> {
    const conversation = await this.conversationModel.findById(id).exec();
    if (!conversation) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
    return conversation;
  }

  async update(id: string, updateConversationDto: UpdateConversationDto): Promise<Conversation> {
    const updatedConversation = await this.conversationModel.findByIdAndUpdate(id, updateConversationDto, { new: true }).exec();
    if (!updatedConversation) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
    return updatedConversation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.conversationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
  }

  async checkPrivateConversationExists(senderId: string, receiverId: string): Promise<any> {
    // Rechercher une conversation non-groupe avec les participants spécifiés
    const conversation = await this.conversationModel.findOne({
      is_group: false,
      participants: { $all: [senderId, receiverId] },
    }).exec();

    // Retourne true si une telle conversation est trouvée, sinon false
    return conversation || false;
  }


  async getConversationName({idCurrentUser,idConversation}:{idCurrentUser:string,idConversation:string}): Promise<string> {
    const conversation = await this.conversationModel.findById(idConversation).exec();
    if (!conversation) {
      throw new NotFoundException(`Conversation with ID ${idConversation} not found`);
    }

    if (conversation.is_group) {
      return conversation.name || 'Unnamed';
    }

    const otherParticipantId = conversation.participants.find(participant => participant !== idCurrentUser);
    if (!otherParticipantId) {
      throw new NotFoundException('Other participant not found');
    }

    // Assuming you have a method to get the user by ID and retrieve their name
    const otherParticipant = await this.userService.findOne(otherParticipantId.toString()); // Implement this method

    return otherParticipant.username;
  }

  async getConversationImage({idCurrentUser,idConversation}:{idCurrentUser:string,idConversation:string}): Promise<string> {
    const conversation = await this.conversationModel.findById(idConversation).exec();
    if (!conversation) {
      throw new NotFoundException(`Conversation with ID ${idConversation} not found`);
    }

    if (conversation.is_group) {
      return 'profile.png';
    }

    const otherParticipantId = conversation.participants.find(participant => participant !== idCurrentUser);
    if (!otherParticipantId) {
      throw new NotFoundException('Other participant not found');
    }

    // Assuming you have a method to get the user by ID and retrieve their name
    const otherParticipant = await this.userService.findOne(otherParticipantId.toString()); // Implement this method

    return otherParticipant.pdp;
  }

  async getConversationsByUser(userId: string): Promise<any[]> {
    const conversations = await this.conversationModel.find({ participants: userId }).exec();
    
    const conversationsWithDetails = await Promise.all(
      conversations.map(async (conversation) => {
        const name = await this.getConversationName({idCurrentUser: userId, idConversation: conversation._id});
        const image = await this.getConversationImage({idCurrentUser: userId, idConversation: conversation._id});
        const lastMessage = await this.messageService.getLastMessage(conversation._id);

        console.log(lastMessage?.timestamp);
        
        
        return {
          ...conversation.toObject(),
          name,
          image,
          lastMessage: lastMessage ? lastMessage.content : "",
          lastMessageTime: lastMessage ? lastMessage.timestamp.toLocaleTimeString() : ""
        };
      })
    );

    return conversationsWithDetails;
  }


  formatDate(date: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year},${hours}:${minutes}`;
  }
}

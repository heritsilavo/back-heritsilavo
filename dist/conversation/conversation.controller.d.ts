import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './schemas/conversation.schema';
export declare class ConversationController {
    private readonly conversationService;
    constructor(conversationService: ConversationService);
    create(createConversationDto: CreateConversationDto): Promise<Conversation>;
    findAll(): Promise<Conversation[]>;
    findOne(id: string): Promise<Conversation>;
    update(id: string, updateConversationDto: UpdateConversationDto): Promise<Conversation>;
    remove(id: string): Promise<void>;
    checkPrivateConversationExists({ sender, receiver }: {
        sender: string;
        receiver: string;
    }): Promise<any>;
    getConversationName(idCurrentUser: string, idConversation: string): Promise<String>;
    getConversationsByUser(idUser: string): Promise<any[]>;
}

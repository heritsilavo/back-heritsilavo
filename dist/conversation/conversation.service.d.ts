/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Conversation, ConversationDocument } from 'src/conversation/schemas/conversation.schema';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { UserService } from 'src/user/user.service';
import { MessageService } from 'src/message/message.service';
export declare class ConversationService {
    private conversationModel;
    private readonly userService;
    private readonly messageService;
    constructor(conversationModel: Model<ConversationDocument>, userService: UserService, messageService: MessageService);
    create(createConversationDto: CreateConversationDto): Promise<Conversation>;
    findAll(): Promise<Conversation[]>;
    findOne(id: string): Promise<Conversation>;
    update(id: string, updateConversationDto: UpdateConversationDto): Promise<Conversation>;
    remove(id: string): Promise<void>;
    checkPrivateConversationExists(senderId: string, receiverId: string): Promise<any>;
    getConversationName({ idCurrentUser, idConversation }: {
        idCurrentUser: string;
        idConversation: string;
    }): Promise<string>;
    getConversationImage({ idCurrentUser, idConversation }: {
        idCurrentUser: string;
        idConversation: string;
    }): Promise<string>;
    getConversationsByUser(userId: string): Promise<any[]>;
    formatDate(date: Date): string;
}

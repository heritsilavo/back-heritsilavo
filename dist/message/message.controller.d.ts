import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';
import { Message } from './schemas/message.shemas';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getAll(): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findOne(id: string): Promise<Message>;
    update(id: string, updateMessageDto: CreateMessageDto): Promise<Message>;
    delete(id: string): Promise<Message>;
}

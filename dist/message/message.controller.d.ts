import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getAll(): Promise<import("./schemas/message.shemas").Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<import("./schemas/message.shemas").Message>;
}

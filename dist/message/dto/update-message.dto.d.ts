import { CreateMessageDto } from './create-message.dto';
declare const UpdateMessageDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMessageDto>>;
export declare class UpdateMessageDto extends UpdateMessageDto_base {
    conversation_id?: string;
    sender_id?: String;
    content?: string;
    timestamp?: Date;
}
export {};

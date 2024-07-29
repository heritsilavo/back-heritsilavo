import { Server, Socket } from 'socket.io';
export declare class AppGateway {
    server: Server;
    handleSendMessage({ message, senderId, conversation_id }: {
        message: string;
        senderId: string;
        conversation_id: string;
    }, client: Socket): void;
}

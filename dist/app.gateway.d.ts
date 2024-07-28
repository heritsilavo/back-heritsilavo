import { Server, Socket } from 'socket.io';
export declare class AppGateway {
    server: Server;
    handleSendMessage({ message, senderId }: {
        message: string;
        senderId: string;
    }, client: Socket): void;
}

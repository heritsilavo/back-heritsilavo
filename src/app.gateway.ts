// src/app.gateway.ts
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway()
  export class AppGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('sendMessage')
    handleSendMessage(
      @MessageBody() { message, senderId }: { message: string; senderId: string },
      @ConnectedSocket() client: Socket,
    ): void {
      this.server.emit('message', { message, senderId, senderSocketId: client.id });
    }
  }
  
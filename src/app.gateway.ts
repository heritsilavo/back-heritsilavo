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
      @MessageBody() { message, senderId,conversation_id }: { message: string; senderId: string, conversation_id:string },
      @ConnectedSocket() client: Socket,
    ): void {
      
      this.server.emit('message', { conversation_id,message, senderId, senderSocketId: client.id });
    }
  }
  
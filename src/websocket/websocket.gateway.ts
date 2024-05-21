import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketService } from './websocket.service';
@WebSocketGateway(80, { namespace: '/chat', cors: { origin: '*' } })
export class WebSocket implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    public server: Server;
    constructor(private readonly webSocketService: WebsocketService) {}

    handleConnection(client: Socket) {
        console.log('Client connected: ' + client.id);
    }

    handleDisconnect(client: Socket) {
        console.log('Client disconnected: ' + client.id);
    }

    @SubscribeMessage('mensaje')
    handleMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
        const { name } = client.handshake.auth;

        const message = {
            id: name,
            message: data,
        };
        client.broadcast.emit('mensaje', message);
    }
}

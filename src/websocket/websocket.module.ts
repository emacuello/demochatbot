import { Module } from '@nestjs/common';
import { WebSocket } from './websocket.gateway';
import { WebsocketService } from './websocket.service';

@Module({
    imports: [],
    controllers: [],
    providers: [WebSocket, WebsocketService],
})
export class GatewayModule {}

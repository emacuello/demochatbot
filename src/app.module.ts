import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './websocket/websocket.module';
import { authModule } from './auth/auth.module';

@Module({
    imports: [GatewayModule, authModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

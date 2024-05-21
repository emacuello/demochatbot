import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dtos/users.dtos';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() login: any) {
        console.log(login, 'LOG EN CONTROLLERS');

        return await this.authService.login(login);
    }

    @Post('register')
    register(@Body() user: UserDto) {
        return this.authService.register(user);
    }
}

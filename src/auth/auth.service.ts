import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto, UserDto } from 'src/dtos/users.dtos';

@Injectable()
export class AuthService {
    constructor() {}
    private users: UserDto[] = [
        {
            name: 'Emanuel',
            email: 'ema@mail.com',
            password: '1234',
            birthdate: '01/01/1990',
            token: 'ema123',
        },
        {
            name: 'Pachita',
            email: 'pachita@mail.com',
            password: '1234',
            birthdate: '01/01/1990',
            token: 'pachita123',
        },
    ];

    async login(login: LoginDto) {
        console.log(login, 'LOG DE LOS DATOS ENTRANTES');
        console.log(this.users);
        const user = await this.users.find((u) => u.email === login.email);
        console.log(user, 'LOG DE LA BUSQUEDA EN MOCK DATA');

        if (!user) {
            throw new BadRequestException('credenciales incorrectas');
        }
        if (user.password !== login.password) {
            throw new BadRequestException('credenciales incorrectas');
        }

        return {
            name: user.name,
            email: login.email,
            token: user.token,
        };
    }

    async register(user: UserDto) {
        console.log(user);
        this.users.push(user);
        return 'usuario registrado';
    }
}

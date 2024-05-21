export class UserDto {
    name: string;
    email: string;
    password: string;
    birthdate: string;
    token: string;
}

export class LoginDto {
    email: string;
    password: string;
}

// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(credentials: LoginDto) {
    const user = await this.usersService.findOneByEmail(credentials.email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(
        credentials.password,
        user.password,
      );
      if (isPasswordValid) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        console.log('Received credentials:', credentials);
        console.log('User found:', user);
        console.log('Is password valid?', isPasswordValid);

        return { message: 'Login successful', access_token: accessToken };
      }
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthInput } from './dto/create-auth.input';
import { LoginAuthInput } from './dto/login-auth.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: CreateAuthInput) {
    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: registerUserDto.email,
        name: registerUserDto.name,
        password: hashedPassword,
      },
    });

    return this.generateToken(user);
  }

  async logIn(loginUserDto: LoginAuthInput) {
    const user = await this.prisma.user.findFirst({
      where: { email: loginUserDto.email },
    });

    if (
      !user ||
      !(await bcrypt.compare(loginUserDto.password, user.password))
    ) {
      throw new Error('Invalid credentials');
    }

    return this.generateToken(user);
  }

  generateToken(user) {
    const accessToken = this.jwtService.sign({ userId: user.id });
    console.log({ accessToken, user });
    return { accessToken, user };
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { PrismaService } from '../../prisma.service';
import {LoginAuthInput} from "./dto/login-auth.input";

@Injectable()
export class AuthService {
  constructor(readonly prisma: PrismaService) {}

  signUp(dto: CreateAuthInput) {
    this.prisma.user.create({ data: dto });
  }

  findOneByEmail(dto: LoginAuthInput) {
    this.prisma.user.findFirst({
      where: {email: dto.email}
    });
  }
}

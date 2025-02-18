import { Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuthService {
  constructor(readonly prisma: PrismaService) {}

  signUp(dto: CreateAuthInput) {
    this.prisma.user.create({ data: dto });
  }

  findOneByEmail(email: string) {
    this.prisma.user.findFirst({
      where: { email: email },
    });
  }
}

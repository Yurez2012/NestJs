import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../prisma.module.service';
import { AuthResolver } from './auth.resolver';
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}

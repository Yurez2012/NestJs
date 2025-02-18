import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../prisma.module.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UniqueEmailValidator } from './validator/email-unique.validator';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret',
      signOptions: {
        expiresIn: '1h',
      },
    }),
    PrismaModule,
    JwtModule,
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, UniqueEmailValidator, JwtStrategy],
})
export class AuthModule {}

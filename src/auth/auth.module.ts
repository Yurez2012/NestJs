import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../prisma.module.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UniqueEmailValidator } from './validator/email-unique.validator';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // Використовуємо секрет з .env або значення за замовчуванням
      signOptions: {
        expiresIn: '1h', // Тривалість дії токенів
      },
    }),
    PrismaModule,
    JwtModule,
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, UniqueEmailValidator],
})
export class AuthModule {}

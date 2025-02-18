import { Module } from '@nestjs/common';
import { MountainService } from './mountain.service';
import { MountainResolver } from './mountain.resolver';
import { PrismaModule } from '../../prisma.module.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [MountainResolver, MountainService],
  exports: [MountainService],
})
export class MountainModule {}

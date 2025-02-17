import { Module } from '@nestjs/common';
import { MountainService } from './mountain.service';
import { MountainResolver } from './mountain.resolver';
import { PrismaModule } from '../../prisma.module.service';

@Module({
  imports: [PrismaModule],
  providers: [MountainResolver, MountainService],
  exports: [MountainService],
})
export class MountainModule {}

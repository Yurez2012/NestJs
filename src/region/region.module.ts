import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { PrismaModule } from '../../prisma.module.service';

@Module({
  imports: [PrismaModule],
  providers: [RegionResolver, RegionService],
})
export class RegionModule {}

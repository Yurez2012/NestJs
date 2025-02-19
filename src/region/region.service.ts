import { Injectable } from '@nestjs/common';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRegionInput: CreateRegionInput) {
    return this.prisma.region.create({ data: createRegionInput });
  }

  findAll() {
    return this.prisma.region.findMany();
  }

  findOne(id: string) {
    return this.prisma.region.findFirst({ where: { id: id } });
  }

  update(id: string, updateRegionInput: UpdateRegionInput) {
    return this.prisma.region.update({
      where: { id: id },
      data: updateRegionInput,
    });
  }

  remove(id: string) {
    return this.prisma.region.delete({ where: { id: id } });
  }
}

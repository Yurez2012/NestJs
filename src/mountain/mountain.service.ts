import { Injectable } from '@nestjs/common';
import { CreateMountainInput } from './dto/create-mountain.input';
import { UpdateMountainInput } from './dto/update-mountain.input';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MountainService {
  constructor(readonly prisma: PrismaService) {}

  create(createMountainInput: CreateMountainInput) {
    return this.prisma.mountain.create({ data: createMountainInput });
  }

  findAll() {
    return this.prisma.mountain.findMany();
  }

  findOne(id: string) {
    return this.prisma.mountain.findFirst({
      where: { id: id },
    });
  }

  update(id: string, dto: UpdateMountainInput) {
    this.prisma.mountain.update({
      where: { id: id },
      data: dto,
    });
  }

  remove(id: string) {
    this.prisma.mountain.delete({
      where: { id: id },
    });
  }
}

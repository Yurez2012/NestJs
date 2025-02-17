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

  findOne(id: number) {
    return `This action returns a #${id} mountain`;
  }

  update(id: number, updateMountainInput: UpdateMountainInput) {
    return this.prisma.mountain.create({ data: updateMountainInput });
  }

  remove(id: number) {
    return `This action removes a #${id} mountain`;
  }
}

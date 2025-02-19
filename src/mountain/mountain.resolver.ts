import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MountainService } from './mountain.service';
import { CreateMountainInput } from './dto/create-mountain.input';
import { Mountain } from './entities/mountain.entity';
import { UpdateMountainInput } from './dto/update-mountain.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guard/gql-auth.guard';

@Resolver('Mountain')
export class MountainResolver {
  constructor(private readonly mountainService: MountainService) {}

  @Mutation(() => Mountain)
  createMountain(
    @Args('createMountainInput') createMountainInput: CreateMountainInput,
  ) {
    return this.mountainService.create(createMountainInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Mountain])
  findAllMountain() {
    return this.mountainService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Mountain)
  findOneMountain(@Args('id') id: string) {
    return this.mountainService.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Mountain)
  updateMountain(
    @Args('updateMountainInput') updateMountainInput: UpdateMountainInput,
  ) {
    return this.mountainService.update(
      updateMountainInput.id,
      updateMountainInput,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Mountain)
  removeMountain(@Args('id') id: string) {
    return this.mountainService.remove(id);
  }
}

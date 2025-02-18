import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MountainService } from './mountain.service';
import { CreateMountainInput } from './dto/create-mountain.input';
import { Mountain } from './entities/mountain.entity';
import { UpdateMountainInput } from './dto/update-mountain.input';

@Resolver('Mountain')
export class MountainResolver {
  constructor(private readonly mountainService: MountainService) {}

  @Mutation(() => Mountain)
  create(
    @Args('createMountainInput') createMountainInput: CreateMountainInput,
  ) {
    return this.mountainService.create(createMountainInput);
  }

  @Query(() => [Mountain])
  findAll() {
    return this.mountainService.findAll();
  }

  @Query(() => Mountain)
  findOne(@Args('id') id: string) {
    return this.mountainService.findOne(id);
  }

  @Mutation(() => Mountain)
  update(
    @Args('updateMountainInput') updateMountainInput: UpdateMountainInput,
  ) {
    return this.mountainService.update(
      updateMountainInput.id,
      updateMountainInput,
    );
  }

  @Mutation(() => Mountain)
  remove(@Args('id') id: string) {
    return this.mountainService.remove(id);
  }
}

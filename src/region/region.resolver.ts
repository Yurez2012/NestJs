import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';
import { Region } from './entities/region.entity';

@Resolver('Region')
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @Mutation(() => Region)
  createRegion(
    @Args('createRegionInput') createRegionInput: CreateRegionInput,
  ) {
    return this.regionService.create(createRegionInput);
  }

  @Query(() => Region)
  findAllRegion() {
    return this.regionService.findAll();
  }

  @Query(() => Region)
  findOneRegion(@Args('id') id: string) {
    return this.regionService.findOne(id);
  }

  @Mutation(() => Region)
  updateRegion(
    @Args('updateRegionInput') updateRegionInput: UpdateRegionInput,
  ) {
    return this.regionService.update(updateRegionInput.id, updateRegionInput);
  }

  @Mutation(() => Region)
  removeRegion(@Args('id') id: string) {
    return this.regionService.remove(id);
  }
}

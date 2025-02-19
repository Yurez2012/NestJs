import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';
import { Region } from './entities/region.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guard/gql-auth.guard';

@Resolver('Region')
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Region)
  createRegion(
    @Args('createRegionInput') createRegionInput: CreateRegionInput,
  ) {
    return this.regionService.create(createRegionInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Region])
  findAllRegion() {
    return this.regionService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Region)
  findOneRegion(@Args('id') id: string) {
    return this.regionService.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Region)
  updateRegion(
    @Args('updateRegionInput') updateRegionInput: UpdateRegionInput,
  ) {
    return this.regionService.update(updateRegionInput.id, updateRegionInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Region)
  removeRegion(@Args('id') id: string) {
    return this.regionService.remove(id);
  }
}

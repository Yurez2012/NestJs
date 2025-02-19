import { CreateRegionInput } from './create-region.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateRegionInput extends PartialType(CreateRegionInput) {
  @Field()
  id: string;
}

import { CreateMountainInput } from './create-mountain.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMountainInput extends PartialType(CreateMountainInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  height: number;

  @Field()
  geo_location: string;

  @Field()
  admin_location: string;
}

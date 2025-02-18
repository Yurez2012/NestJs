import { CreateMountainInput } from './create-mountain.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMountainInput extends PartialType(CreateMountainInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}

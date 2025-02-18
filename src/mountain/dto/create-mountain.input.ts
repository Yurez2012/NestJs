import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMountainInput {
  @Field()
  name: string;
}

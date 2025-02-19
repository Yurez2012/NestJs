import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRegionInput {
  @Field()
  name: string;
}

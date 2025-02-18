import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMountainInput {
  @Field()
  name: string;

  @Field()
  height: number;

  @Field()
  geo_location: string;

  @Field()
  admin_location: string;
}

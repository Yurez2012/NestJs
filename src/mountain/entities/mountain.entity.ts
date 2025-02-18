import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mountain {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  height: number;

  @Field()
  geo_location: string;

  @Field()
  admin_location: string;
}

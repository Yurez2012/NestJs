import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Region {
  @Field()
  id: string;

  @Field()
  name: string;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mountain {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { UniqueEmail } from '../validator/email-unique.validator';

@InputType()
export class CreateAuthInput {
  @Field()
  name: string;

  @Field()
  @IsEmail()
  @UniqueEmail()
  email: string;

  @Field()
  password: string;
}

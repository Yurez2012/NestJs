import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { PrismaService } from '../../../prisma.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: string) {
    if (!this.prisma) {
      return false;
    }

    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    return !user;
  }

  defaultMessage() {
    return 'Email exists';
  }
}

export function UniqueEmail(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'UniqueEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UniqueEmailValidator,
    });
  };
}

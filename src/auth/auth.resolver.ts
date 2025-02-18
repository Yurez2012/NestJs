import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './entities/user.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { LoginAuthInput } from './dto/login-auth.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async register(@Args('CreateAuthInput') registerUserDto: CreateAuthInput) {
    return this.authService.register(registerUserDto);
  }

  @Mutation(() => AuthPayload)
  async logIn(@Args('LoginAuthInput') loginUserDto: LoginAuthInput) {
    return this.authService.logIn(loginUserDto);
  }
}

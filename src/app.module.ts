import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
    imports: [
        ConfigModule.forRoot({
          isGlobal: true
        }),
        AuthModule,
        UsersModule,
        MessagesModule,
    ],
    providers: [UsersService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes('');
    }
}
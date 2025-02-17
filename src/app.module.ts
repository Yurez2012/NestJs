import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
    ],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
                                                consumer
                                                    .apply()
                                                    .forRoutes('');
                            }
}
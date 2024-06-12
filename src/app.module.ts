import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.modules';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(logger)
        .exclude(
            {path: 'cats', method: RequestMethod.GET},
            {path: 'cats', method: RequestMethod.POST},
            'cats/(.*)'
        )
        .forRoutes(CatsController)
    }
}
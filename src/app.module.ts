import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
//import { AppService } from './app.service';

@Module({
 controllers: [CatsController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServerService } from './micro.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ServerService],
})
export class AppModule {}

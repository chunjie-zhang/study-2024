import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from './main/main.controller';
import { ZcjModule } from './zcj/zcj.module';

@Module({
  imports: [ZcjModule],
  controllers: [AppController, MainController],
  providers: [AppService],
})
export class AppModule {}

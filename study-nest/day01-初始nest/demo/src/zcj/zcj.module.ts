import { Module } from '@nestjs/common';
import { ZcjService } from './zcj.service';
import { ZcjController } from './zcj.controller';

@Module({
  controllers: [ZcjController],
  providers: [ZcjService]
})
export class ZcjModule {}

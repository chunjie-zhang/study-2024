import { Test, TestingModule } from '@nestjs/testing';
import { ZcjController } from './zcj.controller';
import { ZcjService } from './zcj.service';

describe('ZcjController', () => {
  let controller: ZcjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZcjController],
      providers: [ZcjService],
    }).compile();

    controller = module.get<ZcjController>(ZcjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

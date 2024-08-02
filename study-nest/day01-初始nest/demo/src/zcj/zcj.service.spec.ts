import { Test, TestingModule } from '@nestjs/testing';
import { ZcjService } from './zcj.service';

describe('ZcjService', () => {
  let service: ZcjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZcjService],
    }).compile();

    service = module.get<ZcjService>(ZcjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

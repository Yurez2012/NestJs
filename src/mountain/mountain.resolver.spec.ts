import { Test, TestingModule } from '@nestjs/testing';
import { MountainResolver } from './mountain.resolver';
import { MountainService } from './mountain.service';

describe('MountainResolver', () => {
  let resolver: MountainResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MountainResolver, MountainService],
    }).compile();

    resolver = module.get<MountainResolver>(MountainResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

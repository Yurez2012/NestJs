import { Test, TestingModule } from '@nestjs/testing';
import { MountainService } from './mountain.service';
import { PrismaService } from '../../prisma.service';

describe('MountainService', () => {
  let service: MountainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MountainService,
        {
          provide: PrismaService,
          useValue: {
            mountain: {
              findMany: jest.fn().mockResolvedValue([]),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<MountainService>(MountainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

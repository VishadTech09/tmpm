import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioMembersService } from './portfolio_members.service';

describe('PortfolioMembersService', () => {
  let service: PortfolioMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioMembersService],
    }).compile();

    service = module.get<PortfolioMembersService>(PortfolioMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

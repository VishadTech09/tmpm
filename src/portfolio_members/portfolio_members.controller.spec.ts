import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioMembersController } from './portfolio_members.controller';
import { PortfolioMembersService } from './portfolio_members.service';

describe('PortfolioMembersController', () => {
  let controller: PortfolioMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioMembersController],
      providers: [PortfolioMembersService],
    }).compile();

    controller = module.get<PortfolioMembersController>(PortfolioMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

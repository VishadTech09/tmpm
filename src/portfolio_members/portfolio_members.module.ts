import { Module } from '@nestjs/common';
import { PortfolioMembersService } from './portfolio_members.service';
import { PortfolioMembersController } from './portfolio_members.controller';

@Module({
  controllers: [PortfolioMembersController],
  providers: [PortfolioMembersService]
})
export class PortfolioMembersModule {}

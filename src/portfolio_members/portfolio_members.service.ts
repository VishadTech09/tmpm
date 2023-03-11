import { Injectable } from '@nestjs/common';
import { CreatePortfolioMemberDto } from './dto/create-portfolio_member.dto';
import { UpdatePortfolioMemberDto } from './dto/update-portfolio_member.dto';

@Injectable()
export class PortfolioMembersService {
  create(createPortfolioMemberDto: CreatePortfolioMemberDto) {
    return 'This action adds a new portfolioMember';
  }

  findAll() {
    return `This action returns all portfolioMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portfolioMember`;
  }

  update(id: number, updatePortfolioMemberDto: UpdatePortfolioMemberDto) {
    return `This action updates a #${id} portfolioMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} portfolioMember`;
  }
}

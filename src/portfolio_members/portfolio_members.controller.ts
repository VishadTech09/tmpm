import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortfolioMembersService } from './portfolio_members.service';
import { CreatePortfolioMemberDto } from './dto/create-portfolio_member.dto';
import { UpdatePortfolioMemberDto } from './dto/update-portfolio_member.dto';

@Controller('portfolio-members')
export class PortfolioMembersController {
  constructor(private readonly portfolioMembersService: PortfolioMembersService) {}

  @Post()
  create(@Body() createPortfolioMemberDto: CreatePortfolioMemberDto) {
    return this.portfolioMembersService.create(createPortfolioMemberDto);
  }

  @Get()
  findAll() {
    return this.portfolioMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfolioMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortfolioMemberDto: UpdatePortfolioMemberDto) {
    return this.portfolioMembersService.update(+id, updatePortfolioMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portfolioMembersService.remove(+id);
  }
}

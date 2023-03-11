import { PartialType } from '@nestjs/mapped-types';
import { CreatePortfolioMemberDto } from './create-portfolio_member.dto';

export class UpdatePortfolioMemberDto extends PartialType(CreatePortfolioMemberDto) {}

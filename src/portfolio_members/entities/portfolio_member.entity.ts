import { AppBaseEntity } from 'src/entities/base.entity';
import {Entity} from 'typeorm';

@Entity({name:"TBL_PORTFOLIO_MEMBERS"})
export class PortfolioMember extends AppBaseEntity {}

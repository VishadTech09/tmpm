import { AppBaseEntity } from 'src/entities/base.entity';
import {Entity} from 'typeorm';

@Entity({name:"TBL_NOTES"})
export class Note extends AppBaseEntity {}

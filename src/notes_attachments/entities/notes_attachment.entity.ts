import { AppBaseEntity } from 'src/entities/base.entity';
import {Entity} from 'typeorm';

@Entity({name:"TBL_NOTES_ATTACHMENTS"})
export class NotesAttachment extends AppBaseEntity{}

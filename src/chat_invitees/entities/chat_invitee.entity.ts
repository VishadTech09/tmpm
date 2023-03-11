import { AppBaseEntity } from "src/entities/base.entity";
import { Entity } from 'typeorm';

@Entity({name:"TBL_CHAT_INVITEES"})
export class ChatInvitee extends AppBaseEntity { }

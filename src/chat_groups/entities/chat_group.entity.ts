import { AppBaseEntity } from "src/entities/base.entity";
import { Entity } from 'typeorm'

@Entity({ name: "TBL_CHAT_GROUPS" })
export class ChatGroup extends AppBaseEntity {

}

import { AppBaseEntity } from "src/entities/base.entity";
import {Entity} from 'typeorm';

@Entity({name:"TBL_TASK_NOTIFICATION_SUBSCRIBER"})
export class TaskNotificationSubscriber extends AppBaseEntity{}

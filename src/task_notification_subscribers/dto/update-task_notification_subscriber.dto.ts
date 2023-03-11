import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskNotificationSubscriberDto } from './create-task_notification_subscriber.dto';

export class UpdateTaskNotificationSubscriberDto extends PartialType(CreateTaskNotificationSubscriberDto) {}

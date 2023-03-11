import { Module } from '@nestjs/common';
import { TaskNotificationSubscribersService } from './task_notification_subscribers.service';
import { TaskNotificationSubscribersController } from './task_notification_subscribers.controller';

@Module({
  controllers: [TaskNotificationSubscribersController],
  providers: [TaskNotificationSubscribersService]
})
export class TaskNotificationSubscribersModule {}

import { Injectable } from '@nestjs/common';
import { CreateTaskNotificationSubscriberDto } from './dto/create-task_notification_subscriber.dto';
import { UpdateTaskNotificationSubscriberDto } from './dto/update-task_notification_subscriber.dto';

@Injectable()
export class TaskNotificationSubscribersService {
  create(createTaskNotificationSubscriberDto: CreateTaskNotificationSubscriberDto) {
    return 'This action adds a new taskNotificationSubscriber';
  }

  findAll() {
    return `This action returns all taskNotificationSubscribers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskNotificationSubscriber`;
  }

  update(id: number, updateTaskNotificationSubscriberDto: UpdateTaskNotificationSubscriberDto) {
    return `This action updates a #${id} taskNotificationSubscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskNotificationSubscriber`;
  }
}

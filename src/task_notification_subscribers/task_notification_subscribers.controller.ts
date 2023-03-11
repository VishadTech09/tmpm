import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskNotificationSubscribersService } from './task_notification_subscribers.service';
import { CreateTaskNotificationSubscriberDto } from './dto/create-task_notification_subscriber.dto';
import { UpdateTaskNotificationSubscriberDto } from './dto/update-task_notification_subscriber.dto';

@Controller('task-notification-subscribers')
export class TaskNotificationSubscribersController {
  constructor(private readonly taskNotificationSubscribersService: TaskNotificationSubscribersService) {}

  @Post()
  create(@Body() createTaskNotificationSubscriberDto: CreateTaskNotificationSubscriberDto) {
    return this.taskNotificationSubscribersService.create(createTaskNotificationSubscriberDto);
  }

  @Get()
  findAll() {
    return this.taskNotificationSubscribersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskNotificationSubscribersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskNotificationSubscriberDto: UpdateTaskNotificationSubscriberDto) {
    return this.taskNotificationSubscribersService.update(+id, updateTaskNotificationSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskNotificationSubscribersService.remove(+id);
  }
}

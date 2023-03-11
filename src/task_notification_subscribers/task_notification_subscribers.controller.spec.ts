import { Test, TestingModule } from '@nestjs/testing';
import { TaskNotificationSubscribersController } from './task_notification_subscribers.controller';
import { TaskNotificationSubscribersService } from './task_notification_subscribers.service';

describe('TaskNotificationSubscribersController', () => {
  let controller: TaskNotificationSubscribersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskNotificationSubscribersController],
      providers: [TaskNotificationSubscribersService],
    }).compile();

    controller = module.get<TaskNotificationSubscribersController>(TaskNotificationSubscribersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

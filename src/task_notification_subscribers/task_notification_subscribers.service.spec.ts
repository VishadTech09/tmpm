import { Test, TestingModule } from '@nestjs/testing';
import { TaskNotificationSubscribersService } from './task_notification_subscribers.service';

describe('TaskNotificationSubscribersService', () => {
  let service: TaskNotificationSubscribersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskNotificationSubscribersService],
    }).compile();

    service = module.get<TaskNotificationSubscribersService>(TaskNotificationSubscribersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

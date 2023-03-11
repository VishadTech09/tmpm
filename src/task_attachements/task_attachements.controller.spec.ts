import { Test, TestingModule } from '@nestjs/testing';
import { TaskAttachementsController } from './task_attachements.controller';
import { TaskAttachementsService } from './task_attachements.service';

describe('TaskAttachementsController', () => {
  let controller: TaskAttachementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskAttachementsController],
      providers: [TaskAttachementsService],
    }).compile();

    controller = module.get<TaskAttachementsController>(TaskAttachementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

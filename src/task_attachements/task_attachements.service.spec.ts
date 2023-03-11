import { Test, TestingModule } from '@nestjs/testing';
import { TaskAttachementsService } from './task_attachements.service';

describe('TaskAttachementsService', () => {
  let service: TaskAttachementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskAttachementsService],
    }).compile();

    service = module.get<TaskAttachementsService>(TaskAttachementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

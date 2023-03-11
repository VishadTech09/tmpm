import { Test, TestingModule } from '@nestjs/testing';
import { ChatGroupsController } from './chat_groups.controller';
import { ChatGroupsService } from './chat_groups.service';

describe('ChatGroupsController', () => {
  let controller: ChatGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatGroupsController],
      providers: [ChatGroupsService],
    }).compile();

    controller = module.get<ChatGroupsController>(ChatGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

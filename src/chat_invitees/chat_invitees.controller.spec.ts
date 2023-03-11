import { Test, TestingModule } from '@nestjs/testing';
import { ChatInviteesController } from './chat_invitees.controller';
import { ChatInviteesService } from './chat_invitees.service';

describe('ChatInviteesController', () => {
  let controller: ChatInviteesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatInviteesController],
      providers: [ChatInviteesService],
    }).compile();

    controller = module.get<ChatInviteesController>(ChatInviteesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

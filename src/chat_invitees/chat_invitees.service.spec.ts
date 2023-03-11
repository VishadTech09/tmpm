import { Test, TestingModule } from '@nestjs/testing';
import { ChatInviteesService } from './chat_invitees.service';

describe('ChatInviteesService', () => {
  let service: ChatInviteesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatInviteesService],
    }).compile();

    service = module.get<ChatInviteesService>(ChatInviteesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

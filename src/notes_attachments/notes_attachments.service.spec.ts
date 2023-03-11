import { Test, TestingModule } from '@nestjs/testing';
import { NotesAttachmentsService } from './notes_attachments.service';

describe('NotesAttachmentsService', () => {
  let service: NotesAttachmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesAttachmentsService],
    }).compile();

    service = module.get<NotesAttachmentsService>(NotesAttachmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

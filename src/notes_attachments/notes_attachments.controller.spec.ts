import { Test, TestingModule } from '@nestjs/testing';
import { NotesAttachmentsController } from './notes_attachments.controller';
import { NotesAttachmentsService } from './notes_attachments.service';

describe('NotesAttachmentsController', () => {
  let controller: NotesAttachmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesAttachmentsController],
      providers: [NotesAttachmentsService],
    }).compile();

    controller = module.get<NotesAttachmentsController>(NotesAttachmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

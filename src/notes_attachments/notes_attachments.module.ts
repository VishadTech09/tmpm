import { Module } from '@nestjs/common';
import { NotesAttachmentsService } from './notes_attachments.service';
import { NotesAttachmentsController } from './notes_attachments.controller';

@Module({
  controllers: [NotesAttachmentsController],
  providers: [NotesAttachmentsService]
})
export class NotesAttachmentsModule {}

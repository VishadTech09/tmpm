import { Injectable } from '@nestjs/common';
import { CreateNotesAttachmentDto } from './dto/create-notes_attachment.dto';
import { UpdateNotesAttachmentDto } from './dto/update-notes_attachment.dto';

@Injectable()
export class NotesAttachmentsService {
  create(createNotesAttachmentDto: CreateNotesAttachmentDto) {
    return 'This action adds a new notesAttachment';
  }

  findAll() {
    return `This action returns all notesAttachments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notesAttachment`;
  }

  update(id: number, updateNotesAttachmentDto: UpdateNotesAttachmentDto) {
    return `This action updates a #${id} notesAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} notesAttachment`;
  }
}

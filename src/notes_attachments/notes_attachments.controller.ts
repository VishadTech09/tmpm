import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesAttachmentsService } from './notes_attachments.service';
import { CreateNotesAttachmentDto } from './dto/create-notes_attachment.dto';
import { UpdateNotesAttachmentDto } from './dto/update-notes_attachment.dto';

@Controller('notes-attachments')
export class NotesAttachmentsController {
  constructor(private readonly notesAttachmentsService: NotesAttachmentsService) {}

  @Post()
  create(@Body() createNotesAttachmentDto: CreateNotesAttachmentDto) {
    return this.notesAttachmentsService.create(createNotesAttachmentDto);
  }

  @Get()
  findAll() {
    return this.notesAttachmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesAttachmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotesAttachmentDto: UpdateNotesAttachmentDto) {
    return this.notesAttachmentsService.update(+id, updateNotesAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesAttachmentsService.remove(+id);
  }
}

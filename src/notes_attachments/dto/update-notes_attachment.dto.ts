import { PartialType } from '@nestjs/mapped-types';
import { CreateNotesAttachmentDto } from './create-notes_attachment.dto';

export class UpdateNotesAttachmentDto extends PartialType(CreateNotesAttachmentDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskAttachementDto } from './create-task_attachement.dto';

export class UpdateTaskAttachementDto extends PartialType(CreateTaskAttachementDto) {}

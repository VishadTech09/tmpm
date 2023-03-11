import { Injectable } from '@nestjs/common';
import { CreateTaskAttachementDto } from './dto/create-task_attachement.dto';
import { UpdateTaskAttachementDto } from './dto/update-task_attachement.dto';

@Injectable()
export class TaskAttachementsService {
  create(createTaskAttachementDto: CreateTaskAttachementDto) {
    return 'This action adds a new taskAttachement';
  }

  findAll() {
    return `This action returns all taskAttachements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskAttachement`;
  }

  update(id: number, updateTaskAttachementDto: UpdateTaskAttachementDto) {
    return `This action updates a #${id} taskAttachement`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskAttachement`;
  }
}

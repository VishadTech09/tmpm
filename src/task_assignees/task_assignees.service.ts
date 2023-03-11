import { Injectable } from '@nestjs/common';
import { CreateTaskAssigneeDto } from './dto/create-task_assignee.dto';
import { UpdateTaskAssigneeDto } from './dto/update-task_assignee.dto';

@Injectable()
export class TaskAssigneesService {
  create(createTaskAssigneeDto: CreateTaskAssigneeDto) {
    return 'This action adds a new taskAssignee';
  }

  findAll() {
    return `This action returns all taskAssignees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskAssignee`;
  }

  update(id: number, updateTaskAssigneeDto: UpdateTaskAssigneeDto) {
    return `This action updates a #${id} taskAssignee`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskAssignee`;
  }
}

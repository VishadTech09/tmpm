import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskAssigneesService } from './task_assignees.service';
import { CreateTaskAssigneeDto } from './dto/create-task_assignee.dto';
import { UpdateTaskAssigneeDto } from './dto/update-task_assignee.dto';

@Controller('task-assignees')
export class TaskAssigneesController {
  constructor(private readonly taskAssigneesService: TaskAssigneesService) {}

  @Post()
  create(@Body() createTaskAssigneeDto: CreateTaskAssigneeDto) {
    return this.taskAssigneesService.create(createTaskAssigneeDto);
  }

  @Get()
  findAll() {
    return this.taskAssigneesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskAssigneesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskAssigneeDto: UpdateTaskAssigneeDto) {
    return this.taskAssigneesService.update(+id, updateTaskAssigneeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskAssigneesService.remove(+id);
  }
}

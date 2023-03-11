import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskAttachementsService } from './task_attachements.service';
import { CreateTaskAttachementDto } from './dto/create-task_attachement.dto';
import { UpdateTaskAttachementDto } from './dto/update-task_attachement.dto';

@Controller('task-attachements')
export class TaskAttachementsController {
  constructor(private readonly taskAttachementsService: TaskAttachementsService) {}

  @Post()
  create(@Body() createTaskAttachementDto: CreateTaskAttachementDto) {
    return this.taskAttachementsService.create(createTaskAttachementDto);
  }

  @Get()
  findAll() {
    return this.taskAttachementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskAttachementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskAttachementDto: UpdateTaskAttachementDto) {
    return this.taskAttachementsService.update(+id, updateTaskAttachementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskAttachementsService.remove(+id);
  }
}

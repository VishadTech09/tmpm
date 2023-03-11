import { Module } from '@nestjs/common';
import { TaskAttachementsService } from './task_attachements.service';
import { TaskAttachementsController } from './task_attachements.controller';

@Module({
  controllers: [TaskAttachementsController],
  providers: [TaskAttachementsService]
})
export class TaskAttachementsModule {}

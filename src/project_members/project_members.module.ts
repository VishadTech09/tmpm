import { Module } from '@nestjs/common';
import { ProjectMembersService } from './project_members.service';
import { ProjectMembersController } from './project_members.controller';

@Module({
  controllers: [ProjectMembersController],
  providers: [ProjectMembersService]
})
export class ProjectMembersModule {}

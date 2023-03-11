import { Module } from '@nestjs/common';
import { ChatGroupsService } from './chat_groups.service';
import { ChatGroupsController } from './chat_groups.controller';

@Module({
  controllers: [ChatGroupsController],
  providers: [ChatGroupsService]
})
export class ChatGroupsModule {}

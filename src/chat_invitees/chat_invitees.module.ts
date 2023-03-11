import { Module } from '@nestjs/common';
import { ChatInviteesService } from './chat_invitees.service';
import { ChatInviteesController } from './chat_invitees.controller';

@Module({
  controllers: [ChatInviteesController],
  providers: [ChatInviteesService]
})
export class ChatInviteesModule {}

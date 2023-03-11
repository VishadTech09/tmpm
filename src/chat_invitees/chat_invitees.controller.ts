import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatInviteesService } from './chat_invitees.service';
import { CreateChatInviteeDto } from './dto/create-chat_invitee.dto';
import { UpdateChatInviteeDto } from './dto/update-chat_invitee.dto';

@Controller('chat-invitees')
export class ChatInviteesController {
  constructor(private readonly chatInviteesService: ChatInviteesService) {}

  @Post()
  create(@Body() createChatInviteeDto: CreateChatInviteeDto) {
    return this.chatInviteesService.create(createChatInviteeDto);
  }

  @Get()
  findAll() {
    return this.chatInviteesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatInviteesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatInviteeDto: UpdateChatInviteeDto) {
    return this.chatInviteesService.update(+id, updateChatInviteeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatInviteesService.remove(+id);
  }
}

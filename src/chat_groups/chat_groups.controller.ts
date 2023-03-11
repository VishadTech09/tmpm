import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatGroupsService } from './chat_groups.service';
import { CreateChatGroupDto } from './dto/create-chat_group.dto';
import { UpdateChatGroupDto } from './dto/update-chat_group.dto';

@Controller('chat-groups')
export class ChatGroupsController {
  constructor(private readonly chatGroupsService: ChatGroupsService) {}

  @Post()
  create(@Body() createChatGroupDto: CreateChatGroupDto) {
    return this.chatGroupsService.create(createChatGroupDto);
  }

  @Get()
  findAll() {
    return this.chatGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatGroupDto: UpdateChatGroupDto) {
    return this.chatGroupsService.update(+id, updateChatGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatGroupsService.remove(+id);
  }
}

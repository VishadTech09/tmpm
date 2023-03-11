import { Injectable } from '@nestjs/common';
import { CreateChatGroupDto } from './dto/create-chat_group.dto';
import { UpdateChatGroupDto } from './dto/update-chat_group.dto';

@Injectable()
export class ChatGroupsService {
  create(createChatGroupDto: CreateChatGroupDto) {
    return 'This action adds a new chatGroup';
  }

  findAll() {
    return `This action returns all chatGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatGroup`;
  }

  update(id: number, updateChatGroupDto: UpdateChatGroupDto) {
    return `This action updates a #${id} chatGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatGroup`;
  }
}

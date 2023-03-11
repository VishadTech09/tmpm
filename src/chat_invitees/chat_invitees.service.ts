import { Injectable } from '@nestjs/common';
import { CreateChatInviteeDto } from './dto/create-chat_invitee.dto';
import { UpdateChatInviteeDto } from './dto/update-chat_invitee.dto';

@Injectable()
export class ChatInviteesService {
  create(createChatInviteeDto: CreateChatInviteeDto) {
    return 'This action adds a new chatInvitee';
  }

  findAll() {
    return `This action returns all chatInvitees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatInvitee`;
  }

  update(id: number, updateChatInviteeDto: UpdateChatInviteeDto) {
    return `This action updates a #${id} chatInvitee`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatInvitee`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateChatInviteeDto } from './create-chat_invitee.dto';

export class UpdateChatInviteeDto extends PartialType(CreateChatInviteeDto) {}

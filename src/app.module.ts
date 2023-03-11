import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { LabelsModule } from './labels/labels.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { TaskStatusModule } from './task_status/task_status.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ProjectsModule } from './projects/projects.module';
import { NotesModule } from './notes/notes.module';
import { TaskAttachementsModule } from './task_attachements/task_attachements.module';
import { TaskAssigneesModule } from './task_assignees/task_assignees.module';
import { TasksModule } from './tasks/tasks.module';
import { TaskNotificationSubscribersModule } from './task_notification_subscribers/task_notification_subscribers.module';
import { MessagesModule } from './messages/messages.module';
import { ChatGroupsModule } from './chat_groups/chat_groups.module';
import { ChatInviteesModule } from './chat_invitees/chat_invitees.module';
import { NotesAttachmentsModule } from './notes_attachments/notes_attachments.module';
import { PortfolioMembersModule } from './portfolio_members/portfolio_members.module';
import { ChatGroup } from './chat_groups/entities/chat_group.entity';
import { ChatInvitee } from './chat_invitees/entities/chat_invitee.entity';
import { Label } from './labels/entities/label.entity';
import { Message } from './messages/entities/message.entity';
import { Note } from './notes/entities/note.entity';
import { NotesAttachment } from './notes_attachments/entities/notes_attachment.entity';
import { PortfolioMember } from './portfolio_members/entities/portfolio_member.entity';
import { Portfolio } from './portfolios/entities/portfolio.entity';
import { Project } from './projects/entities/project.entity';
import { TaskAssignee } from './task_assignees/entities/task_assignee.entity';
import { TaskAttachement } from './task_attachements/entities/task_attachement.entity';
import { TaskNotificationSubscriber } from './task_notification_subscribers/entities/task_notification_subscriber.entity';
import { TaskStatus } from './task_status/entities/task_status.entity';
import { Workspace } from './workspaces/entities/workspace.entity';
import { Task } from './tasks/entities/task.entity';
import { ProjectMembersModule } from './project_members/project_members.module';
import { ProjectMember } from './project_members/entities/project_member.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "cockroachdb",
      url: 'postgresql://vishad:cstI4hxc0TMOeoUPHYxP6g@vague-fox-3856.6xw.cockroachlabs.cloud:26257/taskmanager?sslmode=verify-full',
      entities: [
        ChatGroup, ChatInvitee, Label,
        Message, Note, NotesAttachment, PortfolioMember,
        Portfolio, Project, TaskAssignee, TaskAttachement,
        TaskNotificationSubscriber, TaskStatus, ProjectMember,
        User, Workspace, Task
      ],
      synchronize: false,
      ssl: true,

    }),
    UsersModule,
    LabelsModule,
    PortfoliosModule,
    TaskStatusModule,
    WorkspacesModule,
    ProjectsModule,
    NotesModule,
    TaskAttachementsModule,
    TaskAssigneesModule,
    TasksModule,
    TaskNotificationSubscribersModule,
    MessagesModule,
    ChatGroupsModule,
    ChatInviteesModule,
    NotesAttachmentsModule,
    PortfolioMembersModule,
    ProjectMembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

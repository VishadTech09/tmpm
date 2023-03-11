import { AppBaseEntity } from "src/entities/base.entity";
import { ProjectMember } from "src/project_members/entities/project_member.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Entity, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: "TBL_TASK_ASSIGNEES" })
export class TaskAssignee extends AppBaseEntity {

    @ManyToOne(() => ProjectMember, (project_member) => project_member.taskAssignees,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "project_member_id" })
    project_member_id: ProjectMember;

    @ManyToOne(() => Task, (task) => task.taskAssignees,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "task_id" })
    task: Task;
}

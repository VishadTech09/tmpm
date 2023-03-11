import { AppBaseEntity } from "src/entities/base.entity";
import { Label } from "src/labels/entities/label.entity";
import { Message } from "src/messages/entities/message.entity";
import { Project } from "src/projects/entities/project.entity";
import { TaskAssignee } from "src/task_assignees/entities/task_assignee.entity";
import { TaskAttachement } from "src/task_attachements/entities/task_attachement.entity";
import { TaskStatus } from "src/task_status/entities/task_status.entity";
import { Entity, ManyToOne, JoinColumn, OneToMany, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: "TBL_TASKS" })
export class Task extends AppBaseEntity {

    @Column({ name: "nice_id", nullable: false })
    nice_id: number;

    @Column({ name: "title", nullable: false })
    title: string;

    @Column({ name: "description", nullable: true })
    description: string;

    @Column({ name: "start_date", nullable: true })
    start_date: Date;

    @Column({ name: "due_date", nullable: true })
    due_date: Date;

    @Column({ name: "personal", default: false, nullable: false })
    personal: boolean;

    @ManyToOne(() => TaskStatus, (status) => status.tasks,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "status" })
    status: TaskStatus;

    @ManyToMany(() => Label, (label) => label.tasks, {
        cascade: ["insert", "update"]
    })
    @JoinTable({ name: "TBL_TASKS_LABELS", joinColumn: { name: "task_id", referencedColumnName: "id", } })
    labels: Array<Label>

    @ManyToOne(() => Project, (project) => project.tasks,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "project_id" })
    project: Project;

    @OneToMany(() => TaskAssignee, (taskAssignee) => taskAssignee.task)
    taskAssignees: Array<TaskAssignee>

    @OneToMany(() => Message, (message) => message.task)
    messages: Array<Message>

    @OneToMany(() => TaskAttachement, (attachment) => attachment.task, {
        cascade: ["insert", "update"]
    })
    attachments: Array<TaskAttachement>;
}

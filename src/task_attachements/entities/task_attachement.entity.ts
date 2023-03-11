import { AppBaseEntity } from "src/entities/base.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: "TBL_TASK_ATTACHMENTS" })
export class TaskAttachement extends AppBaseEntity {

    @Column({ nullable: false, name: "file_name" })
    file_name: string;

    @Column({ nullable: false, name: "file_type" })
    file_type: string;

    @Column({ nullable: false, name: "file_url" })
    file_url: string;

    @ManyToOne(() => Task, (task) => task.attachments)
    @JoinColumn({ name: "task_id" })
    task: Task;
}

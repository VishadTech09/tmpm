import { AppBaseEntity } from 'src/entities/base.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: "TBL_MESSAGES" })
export class Message extends AppBaseEntity {

    @Column({ name: "content", nullable: true })
    content: string;

    @Column({ name: "content_url", nullable: true })
    content_url: string;

    @Column({ name: "message_type", nullable: false, default: 0 })
    type: number;

    //Messages can be at project discussion / task discussion 

    @ManyToOne(() => Project, (project) => project.messages)
    @JoinColumn({ name: "project_id" })
    project: Project;

    @ManyToOne(() => Task, (task) => task.messages)
    @JoinColumn({ name: "task_id" })
    task: Task;
}

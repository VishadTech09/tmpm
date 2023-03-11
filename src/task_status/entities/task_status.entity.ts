import { AppBaseEntity } from "src/entities/base.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: "TBL_TASK_STATUS" })
export class TaskStatus extends AppBaseEntity {

    @Column({ name: "name", nullable: false })
    name: string;
    @Column({ name: "color", nullable: true })
    color: string;

    @OneToMany(() => Task, (task) => task.status)
    tasks: Array<Task>
} 

import { AppBaseEntity } from 'src/entities/base.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';

@Entity({ name: "TBL_LABELS" })
export class Label extends AppBaseEntity {

    @Column({ name: "label", nullable: false })
    label: string;

    @Column({ name: "color", nullable: true })
    color: string;

    @ManyToOne(() => Project, (project) => project.labels)
    @JoinColumn({ name: "project_id" })
    project: Project;

    @ManyToOne(() => User, (user) => user.labels)
    @JoinColumn({ name: "created_by" })
    created_by: User;



    @ManyToMany(() => Task, (task) => task.labels, {
        cascade: ["insert", "update"]
    })
    tasks: Array<Task>
}

import { AppBaseEntity } from "src/entities/base.entity";
import { Label } from "src/labels/entities/label.entity";
import { Message } from "src/messages/entities/message.entity";
import { Portfolio } from "src/portfolios/entities/portfolio.entity";
import { ProjectMember } from "src/project_members/entities/project_member.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Entity, OneToMany, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: "TBL_PROJECTS" })
export class Project extends AppBaseEntity {

    @Column({ name: "name", nullable: false })
    name: string;

    @Column({ name: "description", nullable: true })
    description: string;

    @Column({ name: "nice_id", nullable: false })
    nice_id: string;

    @Column({ name: "color", nullable: true })
    color: string;

    @Column({ name: "public", nullable: false, default: false })
    public: boolean;

    @OneToMany(() => Label, (label) => label.project, { cascade: true })
    labels: Array<Label>

    @OneToMany(() => ProjectMember, (members) => members.project, { cascade: true })
    members: Array<ProjectMember>

    @OneToMany(() => Task, (tasks) => tasks.project, { cascade: true })
    tasks: Array<Task>

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.projects, {
        cascade: ["insert", "update"]
    })
    @JoinColumn({ name: "portfolio_id" })
    portfolio: Portfolio;

    @OneToMany(() => Message, (message) => message.project)
    messages: Array<Message>

}

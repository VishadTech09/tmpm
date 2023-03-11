import { AppBaseEntity } from 'src/entities/base.entity';
import { Project } from 'src/projects/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: "TBL_PORTFOLIOES" })
export class Portfolio extends AppBaseEntity {

    @Column({ name: "name" })
    name: string;

    @Column({ name: "initial" })
    intial: string;

    @Column({ name: "logo" })
    logo: string;

    @Column({ name: "color" })
    color: string;

    @Column({ name: "description" })
    description: string;

    @ManyToOne(() => User, (user) => user.portfolios)
    @JoinColumn({ name: "owner_id" })
    owner: User;

    @ManyToOne(() => Workspace, (workspace) => workspace.portfolios)
    @JoinColumn({ name: "workspace_id" })
    workspace: Workspace;

    @OneToMany(() => Project, (project) => project.portfolio)
    projects: Array<Project>;
}

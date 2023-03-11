import { AppBaseEntity } from "src/entities/base.entity";
import { Label } from "src/labels/entities/label.entity";
import { Portfolio } from "src/portfolios/entities/portfolio.entity";
import { ProjectMember } from "src/project_members/entities/project_member.entity";
import { Workspace } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";

@Entity({ name: "TBL_USERS" })

export class User extends AppBaseEntity {

    @Column({ nullable: false, name: "first_name" })
    firstname: string;

    @Column({ nullable: false, name: "last_name" })
    lastname: string;

    @Column({ nullable: false, name: "short_name" })
    short: string;

    @Column({ name: "profile_url", nullable: true })
    profile_url: string;

    @Column({ unique: true, nullable: false, name: "email" })
    email: string;

    @Column({ default: false, name: "archived", nullable: true })
    archived: boolean;

    @Column({ default: false, name: "verified", nullable: true })
    verified: boolean;

    @Column({ name: "verification_token", nullable: true })
    verification_token: string;

    @Column({ name: "verified_date", nullable: true })
    verified_date: Date;

    @Column({ name: "password", nullable: false })
    password: string;

    @OneToOne(() => Workspace, (workspace) => { workspace.user },
        { nullable: false, cascade: true })
    workspace: Workspace;

    @ManyToMany(() => Workspace, (workspace) => workspace.members,
        { cascade: true })
    @JoinTable({ name: "TBL_USER_WORKSPACES" })
    workspaces: Array<Workspace>

    @OneToMany(() => Label, (label) => label.created_by)
    labels: Array<Label>

    @OneToMany(() => Portfolio, (portfolio) => portfolio.owner)
    portfolios: Array<Portfolio>


    @OneToMany(() => ProjectMember, (members) => members.user,
        { cascade: true })
    projectMembers: Array<ProjectMember>

}

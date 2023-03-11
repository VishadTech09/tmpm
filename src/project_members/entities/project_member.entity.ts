import { AppBaseEntity } from "src/entities/base.entity";
import { Project } from "src/projects/entities/project.entity";
import { TaskAssignee } from "src/task_assignees/entities/task_assignee.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity({ name: "TBL_PROJECT_MEMBERS" })
export class ProjectMember extends AppBaseEntity {


    @ManyToOne(() => User, (user) => user.projectMembers,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "user_id" })
    user: User;


    @ManyToOne(() => Project, (project) => project.members,
        { cascade: ["insert", "update"], nullable: false })
    @JoinColumn({ name: "project_id" })
    project: Project;

    @OneToMany(() => TaskAssignee, (taskAssignee) => taskAssignee.project_member_id)
    taskAssignees: TaskAssignee;

}

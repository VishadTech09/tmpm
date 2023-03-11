import { profile } from "console";
import { AppBaseEntity } from "src/entities/base.entity";
import { Portfolio } from "src/portfolios/entities/portfolio.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany } from 'typeorm';

@Entity({ name: "TBL_WORKSPACES" })
export class Workspace extends AppBaseEntity {

    @Column({ nullable: false })
    name: string

    @OneToOne(() => User, (user) => user.workspace)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToMany(() => User, (user) => user.workspaces)
    members: Array<User>

    @OneToMany(() => Portfolio, (portfolio) => portfolio.workspace)
    portfolios: Array<Portfolio>

}

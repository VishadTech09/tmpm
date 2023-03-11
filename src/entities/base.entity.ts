import { PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, BeforeRemove } from 'typeorm';

export class AppBaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    created_date: Date;

    @Column({ nullable: true })
    updated_date: Date;

    @Column({ nullable: true })
    deleted_date: Date;

    @Column({ name: "deleted", default: false, nullable: false })
    deleted: boolean;

    @Column({ nullable: true })
    archived_date: Date

    @Column({ name: "archived", default: false, nullable: false })
    archived: boolean;

    @BeforeInsert()
    beforeInsert() {
        this.created_date = new Date()
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updated_date = new Date()
    }

    @BeforeRemove()
    beforeRemove() {
        this.deleted_date = new Date()
        this.deleted = true;
    }
}
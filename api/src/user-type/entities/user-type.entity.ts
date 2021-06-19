import { IsNotEmpty } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserType {

    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    @IsNotEmpty()
    description: String;

    @Column()
    @IsNotEmpty()
    active: boolean;    // required

    @UpdateDateColumn()
    // @IsNotEmpty()
    updatedAt: Date;    // required

    @CreateDateColumn()
    // @IsNotEmpty()
    createdAt: Date;    // required

    @OneToMany(() => User, user => user.user_type)
    users: User[];

    @BeforeUpdate()
    public setUpdatedAt() {
        this.updatedAt = new Date();
    }
}

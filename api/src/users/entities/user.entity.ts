import { Column, Entity, PrimaryGeneratedColumn, OneToOne, BeforeUpdate, Timestamp, BeforeInsert, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserType } from "src/user-type/entities/user-type.entity";
// import { UserType } from "./user-type.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    @IsNotEmpty()
    nickname: String;   // required

    @Column()
    @IsNotEmpty()
    name: String;       // required

    @Column()
    @IsNotEmpty()
    phone: String;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: String;      // required

    @OneToMany(() => UserType, user_type => user_type.users)
    @JoinColumn({ name: 'user_type_id' })
    user_type: UserType;  // required (relation)

    @Column()
    @IsNotEmpty()
    active: boolean;    // required

    @UpdateDateColumn()
    @IsNotEmpty()
    updatedAt: Date;    // required

    @CreateDateColumn()
    @IsNotEmpty()
    createdAt: Date;    // required

    @BeforeUpdate()
    public setUpdatedAt() {
        this.updatedAt = new Date();
    }

}

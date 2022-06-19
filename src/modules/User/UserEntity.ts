import { Entity, PrimaryColumn, Column, BaseEntity, Generated, CreateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  phone!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column('boolean', {default: false})
  admin!: boolean;

  @Column('boolean', {default: false})
  practitioner!: boolean;
  
  @Column('boolean', {default: false})
  patient!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

}



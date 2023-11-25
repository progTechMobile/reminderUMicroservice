import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class TeacherRaiting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
  })
  full_name!: string;

  @Column({
    nullable: true,
  })
  observation!: string;

  @Column({
    nullable: true,
    type: 'float'
  })
  score!: number;

  @Column({
    nullable: false
  })
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

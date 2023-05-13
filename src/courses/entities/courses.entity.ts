import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Departments } from './departments.entity';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  gender: string;

  @Column()
  courses: string;

  @Column()
  password: string;

  @ManyToOne(() => Departments, (department) => department.course)
  department: Departments;
}

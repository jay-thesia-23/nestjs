import { Courses } from './courses.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Departments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  department: string;

  @OneToMany(() => Courses, (course) => course.department)
  course: Courses[];
}

import { Courses } from './entities/courses.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { COURSES } from './courses.mock';
@Injectable()
export class CoursesService {
  course = COURSES;

  constructor(
    @InjectRepository(Courses) private courseRepository: Repository<Courses>,
  ) {}
  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      const CourseWithdep = this.courseRepository.find({
        relations: ['department'],
      });

      resolve(CourseWithdep);
    });
  }

  getCourse(courseId): Promise<any> {
    const id = Number(courseId);
    return new Promise((resolve) => {
      const course = this.course.find((course) => course.id === id);

      if (!course) {
        throw new HttpException('Course doesnot exist', 404);
      }

      resolve(course);
    });
  }

  addCourse(newCourse): Promise<any> {
    try {
      const courseadd = this.courseRepository.create(newCourse);

      return this.courseRepository.save(courseadd);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  deleteCourse(courseId): Promise<any> {
    return new Promise((resolve) => {
      console.log(courseId);

      const id = Number(courseId);
      const index = this.course.findIndex((course) => course.id == id);

      if (index == -1) {
        throw new HttpException("Course dostn't exist", 404);
      }

      this.course.splice(index, 1);
      resolve(this.course);
    });
  }
}

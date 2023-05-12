import { HttpException, Injectable } from '@nestjs/common';
import { Http2ServerResponse } from 'http2';
import { COURSES } from './courses.mock';
@Injectable()
export class CoursesService {
  course = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      console.log(this.course);

      resolve(this.course);
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
    return new Promise((resolve) => {
      this.course.push(newCourse);
      resolve(this.course);
    });
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

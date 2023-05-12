import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get('/:courseId')
  async getCourse(@Param('courseId') course) {
    const courseWithId = await this.coursesService.getCourse(course);
    return courseWithId;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const courseAdded = await this.coursesService.addCourse(createCourseDto);
    return courseAdded;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courseDelete = await this.coursesService.deleteCourse(query.courseId);
    return courseDelete;
  }
}

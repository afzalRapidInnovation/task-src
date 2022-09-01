import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
// import { Task, TaskStatus } from './task.model';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // tasksService: TasksService;
  constructor(private readonly tasksService: TasksService) {
    // this.tasksService = TasksService;
  }

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Promise<void> {
  //     // return this.tasksService.getTasks(filterDto)

  // }

  // // helloWrold() {
  // //     // this.taskService.doSomething();
  // // }

  // @Get()
  // // getTasks():Task[] {
  //     getTasks(@Query() filterDto: GetTasksFilterDto):Task[] {
  //     //if we have any filters defined , call tasksService.getTaskWithFilter
  //     //otherwise, just get all tasks from

  //     if(Object.keys(filterDto).length) {
  //         //....
  //         return this.tasksService.getTasksWithFilters(filterDto)
  //     } else {
  //         return this.tasksService.getAllTasks();
  //     }

  //     // return this.tasksService.getAllTasks();
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id:string): Promise<Task> {
  //     return this.tasksService.getTaskById(id)
  // }

  // //get task by id
  // @Get('/:id')
  // getTaskById(@Param('id') id:string):Task {
  //     return this.tasksService.getTaskById(id);
  // }

  @Get()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return { check: 1 };
    // console.log('Title:', title)
    // console.log('Description',description)
    // return this.tasksService.createTask(createTaskDto)
  }

  // @Post()
  // //1st approach
  // // createTask(@Body() body) {
  // //     console.log('Body :>',body)
  // // }
  // // createTask(@Body('title') title:string, @Body('description') description:string) : Task {
  //     createTask(@Body() createTaskDto: CreateTaskDto) : Task {
  //     // console.log('Title:', title)
  //     // console.log('Description',description)
  //     return this.tasksService.createTask(createTaskDto)
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id:string) : void {
  //     return this.tasksService.deleteTask(id)
  // }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    // return this.tasksService.deleteTask(id);
    return null;
  }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  //   ): Promise<Task> {
  //     const { status } = updateTaskStatusDto;
  //     return this.tasksService.updateTaskStatus(id, status);
  //   }

  // @Patch('/:id/status')
  // // updateTaskStatus(@Param('id') id:string, @Body('status') status: TaskStatus) : Task {
  // updateTaskStatus(@Param('id') id:string, @Body() updateTaskStatusDto: UpdateTaskStatusDto) : Task {
  //     const { status } = updateTaskStatusDto
  //     return this.tasksService.updateTaskStatus(id, status)
  // }
}

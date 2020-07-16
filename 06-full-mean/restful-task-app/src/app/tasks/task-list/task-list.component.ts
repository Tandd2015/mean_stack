import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasksErrors: string[] = [];
  public tasks: Task[] = [];
  public task: Task;
  public selectedTask: Task;


  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    // this.taskService.getTasks()
    //   .subscribe({
    //     next: (tasks) => {
    //       console.log('Tasks is ', tasks);
    //       this.tasks = tasks;
    //     },
    //     error: (error) => this.handleErrors(error.error),
    //   });
    this.onGetTasks();

  }

  public onGetTasks(): void {
    this.taskService.getTasks()
      .subscribe({
        next: (tasks) => {
          console.log('Tasks is ', tasks);
          this.tasks = tasks;
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public onSelect(task: Task): void {
    console.log('Selecting a Task!!!', task);
//                   (expression)                  ? (if true) : (if false)
    this.selectedTask = this.selectedTask === task ? null : task;
  }

  public onCreate(task: Task): void {
    console.log('Creating a Task', task);
    this.taskService.createTask(task)
      .subscribe({
        next: (createdTask) => {
          console.log('Created Task', createdTask);
          this.tasks = [...this.tasks, createdTask];
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public onDelete(task: Task): void {
    this.taskService.removeTask(task._id)
      .subscribe({
        next: (dTask) => {
          console.log('Deleted task ', dTask);
          this.tasks = this.tasks.filter(
            dTask => dTask._id !== task._id,
          );
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public onEnter(task: Task): void {
    console.log('The mouse has entered the Task with the title ', task.title);
  }

  public onEvent(event: Event): void {
    console.log('Eventing Preventing');
    event.stopPropagation();
  }

  private handleErrors(errors: string[] | string): void {
    this.tasksErrors = Array.isArray(errors) ? errors : [errors];
  }
}

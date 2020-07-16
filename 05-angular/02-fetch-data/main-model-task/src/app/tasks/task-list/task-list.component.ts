import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/model.task';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[] = [];
  public selectedTask: Task;
  public tasksErrors: string[] = [];


  constructor(private readonly taskService: TaskService ) {}

  public ngOnInit(): void {
    // this.taskService.getTasks()
    //   .subscribe(tasks => {
    //     console.log(tasks);
    //     this.tasks = tasks;
    //   });
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        console.log(tasks);
        this.tasks = tasks;
      },
      error: (error) => {
        console.log(error.error);
        this.handleErrors(error.error);
      },
    });
  }
  public onEvent(event: Event): void {
    console.log('passing event through task-list');
    event.stopPropagation();
  }
  public onSelect(task: Task): void {
    console.log('Selecting task', task);
    this.selectedTask = this.selectedTask === task ? null : task;
  }
  public onCreate(task: Task): void {
    console.log('OnCreate method, tasklist-com', task);
    this.taskService
      .createTask(task)
      .subscribe({
        next: (createdTask) => {
          (this.tasks = [...this.tasks, createdTask]);
          console.log(this.tasks);
        },
        error: (error) => {
          console.log(error.error);
          this.handleErrors(error.error);
        },
      });

  }
  public onDelete(task: Task): void {
    console.log('Deleting task', task);
    this.taskService
      .removeTask(task._id)
      .subscribe({
        next: (deletedBook) => {
          console.log('Deleted task', deletedBook);
          this.tasks = this.tasks.filter(
            currentBook => currentBook._id !== deletedBook._id
          );
        },
        error: (error) => {
          console.log(error.error);
          this.handleErrors(error.error);
        },
      });
  }

  private handleErrors(errors: string[] | string) {
    this.tasksErrors = Array.isArray(errors) ? errors : [errors];
  }
}

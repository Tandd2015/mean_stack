import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/model.task';
import { NgForm } from '@angular/forms';

import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-add-new',
  templateUrl: './task-add-new.component.html',
  styleUrls: ['./task-add-new.component.css']
})
export class TaskAddNewComponent implements OnInit {
  public task = new Task();
  public tasksErrors: string[] = [];

  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {}

  public onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    this.taskService
      .createTask(form.value)
      .subscribe({
        next: (createdTask) => {
          console.log(createdTask);
          this.task = new Task();
          form.reset();
          this.router.navigateByUrl('/');
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

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Task } from '../../models/model.task';
import { TaskService } from '../../services';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-task-update-one',
  templateUrl: './task-update-one.component.html',
  styleUrls: ['./task-update-one.component.css']
})
export class TaskUpdateOneComponent implements OnInit {
  public task: Task;
  public tasksErrors: string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly taskService: TaskService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.taskService.getTask(id)),
      )
      .subscribe({
        next: (task) => {
          console.log('task from api', task);
          this.task = task;
        },
        error: (error) => {
          console.log(error.error);
          this.handleErrors(error.error);
        },
      });
  }

  public onSubmit(event: Event, form: NgForm): void {
    console.log('updating this task', {...form.value, _id: this.task._id});
    this.taskService.updateTask({...form.value, _id: this.task._id})
      .subscribe({
        next: (updatedTask) => {
          console.log('updated this task', updatedTask);
          this.router.navigate(['/tasks', updatedTask._id]);
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

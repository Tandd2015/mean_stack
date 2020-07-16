import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from '../../models';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  public tasksErrors: string[] = [];
  public task = new Task();

  @Output()
  public createdTask = new EventEmitter<Task>();
  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Preventing Default for Form', form);
    this.taskService.createTask(this.task)
      .subscribe({
        next: (createdTask) => {
          console.log('Submitting a New Task', createdTask);
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

  // onSubmit(event: Event, form: NgForm) {
  //   event.preventDefault(); // stops the default Action of submit on the <form (submit)="onSubmit($event)"> to redirect
  //   this.taskz.push(this.taskx); // the collected task is then pushed into an varaible named tasks which is of type array
  //   console.log('onSumbit function running submit.', this.taskx, this.taskz);
  //   this.taskx = new Task(); // reset reference to a task after pushing into a array so form.reset() dont null the enitre object just values
  //   form.reset(); // resesting the content of the inputs of<form (submit)="onSubmit($event, taskForm)">
  // }

  private handleErrors(errors: string[] | string): void {
    this.tasksErrors = Array.isArray(errors) ? errors : [errors];
  }

}

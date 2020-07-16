import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  public tasksErrors: string[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly taskService: TaskService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.taskService.getTask(id)),
      )
      .subscribe({
        next: (task) => {
          console.log('pet from api', task);
          this.task = task;
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public onSubmit(event: Event, form: NgForm) {
    console.log('Editing Task', { ...form.value, _id: this.task._id });
    this.taskService.updateTask({ ...form.value, _id: this.task._id })
      .subscribe({
        next: (updateTask) => {
          console.log(updateTask);
          this.router.navigate(['/tasks', updateTask._id]);
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  private handleErrors(errors: string[] | string) {
    this.tasksErrors = Array.isArray(errors) ? errors : [errors];
  }
}

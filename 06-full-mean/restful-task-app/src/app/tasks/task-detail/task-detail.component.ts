import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Task } from '../../models';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  public tasksErrors: string[] = [];

  @Input()
  public task: Task;
  public isAuthed = false;

  constructor(
    private readonly taskService: TaskService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.taskService.getTask(id))
    )
      .subscribe({
        next: (task) => {
          console.log('Task from Api', task);
          this.task = task;
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public onDelete(task: Task): void {
    this.taskService.removeTask(task._id)
      .subscribe({
        next: (deletedTask) => {
          console.log('Deleted task ', deletedTask);
          this.router.navigateByUrl('/');
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  public addComplete(task: Task): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.taskService.getTask(id)),
      )
      .subscribe({
        next: (updatedTask) => {
          console.log('Task getting Liked', updatedTask);
          updatedTask.completed += 1;
          this.taskService.updateTask(updatedTask)
            .subscribe({
              next: (upDatedT) => {
                this.isAuthed = true;
                this.task = upDatedT;
                console.log('This is upDatedT', upDatedT);
                this.router.navigate(['/tasks', upDatedT._id]);
              },
              error: (error) => this.handleErrors(error.error),
            });
        },
        error: (error) => this.handleErrors(error.error),
      });
  }

  private handleErrors(errors: string[] | string): void {
    this.tasksErrors = Array.isArray(errors) ? errors : [errors];
  }
}

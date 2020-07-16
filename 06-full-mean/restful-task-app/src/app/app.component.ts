import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestfulTaskService } from './services/restful-task.service';
import { Task } from './models';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'restful-task-app';
  public taskz: Task[] = [];
  public taskzErrors: string[] = [];
  public taskx = new Task();
  public Taskx: Task;
  public selectedTaskz: Task;
  public isAuthedx = false;
  public isShowedx = false;


  constructor(
    private readonly restfulTaskService: RestfulTaskService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // this.onGetTaskz(this.taskz);
  }

  // public onCreate(task: Task): void {
  //   console.log('Creating a Task', task);
  //   this.taskService.createTask(task)
  //     .subscribe({
  //       next: (createdTask) => {
  //         console.log('Created Task', createdTask);
  //         this.tasks = [...this.tasks, createdTask];
  //       },
  //       error: (error) => this.handleErrors(error.error),
  //     });
  // }

  public onGetTaskz(taskz: Task[]): void {
    setTimeout(() => {
      this.taskz = this.taskz === null ? this.taskz : null;
      this.restfulTaskService.getTaskz()
        .subscribe({
          next: (taskz) => {
            console.log('Taskz is ', taskz);
            this.taskz = taskz;
            this.isShowedx = this.isShowedx === false ? true : false;
          },
          error: (error) => this.handleErrors(error.error),
        });
    }, 444);
  }

  public onSelectz(taskx: Task): void {
    setTimeout(() => {
//                   (expression)                  ? (if true) : (if false)
      this.selectedTaskz = this.selectedTaskz === taskx ? null : taskx;
      this.Taskx = taskx;
      if (this.selectedTaskz === taskx) {
        console.log('Select a Taskx', this.selectedTaskz, this.isAuthedx);
        this.isAuthedx = this.isAuthedx === false ? true : true;
      } else if (this.selectedTaskz === this.Taskx || this.selectedTaskz === null) {
        console.log('DeSelecting a Taskx!!!', this.selectedTaskz, this.isAuthedx);
        this.isAuthedx = this.isAuthedx === true ? false : true;
      }
    }, 444);
  }

  public onDeletez(taskx: Task): void {
    setTimeout(() => {
      this.restfulTaskService.removeTaskx(taskx._id)
        .subscribe({
          next: (dTaskx) => {
            console.log('Deleted taskx ', dTaskx);
            this.taskz = this.taskz.filter(
              dTaskx => dTaskx._id !== taskx._id,
            );
          },
          error: (error) => this.handleErrors(error.error),
        });
    }, 444);
  }

  public onEnterz(taskx: Task): void {
    console.log('The mouse has entered the Task with the title ', taskx.title);
  }

  public onEventz(event: Event): void {
    console.log('Eventing Preventing');
    event.stopPropagation();
  }

  public onSubmitz(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Preventing Default for Form', form);
    setTimeout(() => {
      this.restfulTaskService.createTaskx(this.taskx)
        .subscribe({
          next: (taskx) => {
            console.log('Submitting a New Taskx', taskx);
            this.taskz.push(this.taskx);
            this.taskx = new Task();
            form.reset();
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log(error.error);
            this.handleErrors(error.error);
          },
        });
    }, 444);
  }

  public addCompletez(taskx: Task): void {
    setTimeout(() => {
      this.route.paramMap
        .pipe(
          map(params => params.get('id')),
          switchMap(id => this.restfulTaskService.getTaskx(id)),
        )
        .subscribe({
          next: (updatedTaskx) => {
            console.log('Taskx getting Liked', updatedTaskx);
            updatedTaskx.completed += 1;
            this.restfulTaskService.updateTaskx(updatedTaskx)
              .subscribe({
                next: (updatedT) => {
                  this.isAuthedx = true;
                  this.selectedTaskz = updatedT;
                  console.log('This is updatedT', updatedT);
                  this.router.navigate(['/', updatedT._id]);
                },
                error: (error) => this.handleErrors(error.error),
              });
          },
          error: (error) => this.handleErrors(error.error),
        });
    }, 444);
  }

  private handleErrors(errors: string[] | string): void {
    this.taskzErrors = Array.isArray(errors) ? errors : [errors];
  }
}

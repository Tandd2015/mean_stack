import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Task } from 'src/app/models/model.task';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task-show-one',
  templateUrl: './task-show-one.component.html',
  styleUrls: ['./task-show-one.component.css']
})
export class TaskShowOneComponent implements OnInit {
  public tasksErrors: string[] = [];

  @Input()
  public task: Task;
  constructor(
    private readonly taskService: TaskService,
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.taskService.getTask(id))
    )
    .subscribe({
      next: (task) => {
        console.log('Retrieved API Task', task);
        this.task = task;
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

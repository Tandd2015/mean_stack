import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../services/message.service';

// import { TASKS } from '../data/data.task';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Task } from '../models/model.task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly baseUrl = '/api/tasks';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private readonly http: HttpClient,
    private readonly messageService: MessageService,
  ) { }

  public getTasks(): Observable<Task[]> {
    console.log('http', this.http);
    return this.http.get<Task[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('Fetched all the Tasks')),
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  public createTask(task: Task): Observable<Task> {
    console.log('creating task', task);
    return this.http.post<Task>(this.baseUrl, task, this.httpOptions)
      .pipe(
        tap((newTask: Task) => this.log(`Created a new Task w/ id=${newTask._id}`)),
        catchError(this.handleError<Task>('createTask', task))
      );
  }

  public getTask(taskId: string): Observable<Task> {
    console.log('getting task', taskId);
    return this.http.get<Task>(`${this.baseUrl}/${taskId}`);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${task._id}`, task);
  }

  public removeTask(taskId: string): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${taskId}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulTaskService {
  public taskzErrors: string[] = [];
  private baseUrl = '/api/taskz';

  constructor(
    private readonly _http: HttpClient
  ) { }

  // public getTaskz(): Observable<Task[]> {
  //   // our http response is an Observable, store it in a variable
  //   const tempObservable = this._http.get<Task[]>(this.baseUrl);
  //   // subscribe to the Observable and Provide the code we would like to
  //   // do with our task from the response
  //   tempObservable.subscribe({
  //     next: (taskz) => {
  //       console.log('Got our taskz!!!', taskz);
  //     },
  //     error: (error) => this.handleErrors(error.error),
  //   });
  //   return tempObservable;
  // }

  public getTaskz(): Observable<Task[]> {
    return this._http.get<Task[]>(this.baseUrl);
  }

  // createTaskx(taskx: Task): Observable<Task> {
  //   const tempObservable = this._http.post<Task>(this.baseUrl, taskx);
  //   tempObservable.subscribe({
  //     next: (taskx) => {
  //       console.log('Create our taskx!!!', taskx);
  //     },
  //     error: (error) => this.handleErrors(error.error),
  //   });
  //   return tempObservable;
  // }

  public createTaskx(taskx: Task): Observable<Task> {
    return this._http.post<Task>(this.baseUrl, taskx);
  }

  public getTaskx(taskxId: string): Observable<Task> {
    return this._http.get<Task>(`${this.baseUrl}/${taskxId}`);
  }

  public updateTaskx(taskx: Task): Observable<Task> {
    return this._http.put<Task>(`${this.baseUrl}/${taskx._id}`, taskx);
  }

  // public removeTaskx(taskxId: string): Observable<Task> {
  //   const tempObservable = this._http.delete<Task>(`${this.baseUrl}/${taskxId}`);
  //   tempObservable.subscribe({
  //     next: (taskx) => {
  //       console.log('Deleting taskx', taskx);
  //     },
  //     error: (error) => this.handleErrors(error.error),
  //   });
  //   return tempObservable;
  // }

  public removeTaskx(taskxId: string): Observable<Task> {
    return this._http.delete<Task>(`${this.baseUrl}/${taskxId}`);
  }

  private handleErrors(errors: string[] | string): void {
    this.taskzErrors = Array.isArray(errors) ? errors : [errors];
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private baseUrl = '/api/tasks';

  constructor(private readonly _http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this._http.post<Task>(this.baseUrl, task);
  }

  getTask(taskId: string): Observable<Task> {
    return this._http.get<Task>(`${this.baseUrl}/${taskId}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this._http.put<Task>(`${this.baseUrl}/${task._id}`, task);
  }

  removeTask(taskId: string): Observable<Task> {
    return this._http.delete<Task>(`${this.baseUrl}/${taskId}`);
  }
}

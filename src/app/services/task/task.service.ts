import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://localhost:7244/api/';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + 'tasks');
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl + 'tasks', task);
  }


}

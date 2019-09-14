import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

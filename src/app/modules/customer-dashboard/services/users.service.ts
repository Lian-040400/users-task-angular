import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users`)
    .pipe(
      map((users: any) => users.map((user: any) => new User(user))),
    )
  }

  addUsers(payload: any): Observable<User> {
    return this.http.post<User[]>(`${environment.baseUrl}/users`, payload)
    .pipe(
      map(user => new User(user))
    );
  }

deleteUser(id: number): Observable<User> {
  return this.http.delete<User>(`${environment.baseUrl}/users/${id}`);
}
editUser(user:User): Observable<User> {
  const body = { title: 'Angular PUT Request Example' };
  console.log(this.http.put<User>(`${environment.baseUrl}/users/${user.id}`,body));
  
  return this.http.put<User>(`${environment.baseUrl}/users/${user.id}`,body);
}
}

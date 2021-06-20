import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.BaseURL);
  }

  get(id: string) {
    return this.http.get<User>(`${this.BaseURL}/${id}`);
  }

  add(data: User) {
    return this.http.post(this.BaseURL, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.BaseURL}/${id}`);
  }

  patch(id: string, data: User) {
    return this.http.patch(`${this.BaseURL}/${id}`, data)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  BaseURL = 'http://localhost:3000/user-type';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<UserType[]>(this.BaseURL);
  }

  get(id: string) {
    return this.http.get<UserType>(`${this.BaseURL}/${id}`);
  }

  add(data: UserType) {
    return this.http.post(this.BaseURL, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.BaseURL}/${id}`);
  }

  patch(id: string, data: UserType) {
    return this.http.patch(`${this.BaseURL}/${id}`, data)

  }
}

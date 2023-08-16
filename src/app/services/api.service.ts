import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ApiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(`${this.ApiUrl}/users`);
  }
}

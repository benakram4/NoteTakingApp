import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of, throwError } from 'rxjs';
import { User } from './models/user.model';
import { MOCK_USERS } from '../mock/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  private _user: User | undefined;

  get user(): User | undefined {
    return this._user;
  }

  login(email: string, password: string) {
    this._user = MOCK_USERS.find(user => user.email === email && user.password === password);
    if (this._user) {
      return of(true).pipe(delay(1000)); // 2 seconds delay for success
    } else {
      return throwError(() => new Error('Invalid username or password')).pipe(delay(1000)); // 2 seconds delay for error
    }
  }

  signup(username:string, email: string, password: string) {
    const userExists = MOCK_USERS.some(user => user.email === email || user.username === username);
    if (userExists) {
      return throwError(() => new Error('User already exists')).pipe(delay(1000)); // 2 seconds delay for error
    } else {
      const id: string = `${MOCK_USERS.length + 1}`;
      this._user = {id ,username, email, password};
      MOCK_USERS.push(this._user);
      return of(true).pipe(delay(1000)); // 2 seconds delay for success
    }
  }

}

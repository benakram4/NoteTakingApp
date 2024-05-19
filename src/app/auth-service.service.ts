import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(email: string, password: string) {
   
    if (email === 'a@a.com' && password === '123456.') {
      return of(true).pipe(delay(2000)); // 2 seconds delay for success
    } else {
      return throwError(() => new Error('Invalid username or password')).pipe(delay(2000)); // 2 seconds delay for error
    }
  }

  signup(email: string, password: string) {

  }

}

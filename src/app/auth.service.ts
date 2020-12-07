import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new Subject<User>();
  constructor() { }
  login(email: string, password: string): Observable<{}>{
    return of({email, password});
  }
  logout(): void{
    // remove the user we have in the subject
    this.setUser(null);
    console.log(`this user has been logged out`);
  }
  get user(): Observable<User>{
    return this.user$.asObservable();
  }
  register(user: any): Observable<{}>{
    // make a call to save user in db
    this.setUser(user);
    return of(user);
  }
  private setUser(user: any): void{
    this.user$.next(user);
  }
}

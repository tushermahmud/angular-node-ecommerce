import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  login(email: string, password: string): Observable<{}>{
    return of({email, password});
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isAuthenicated = new BehaviorSubject<boolean>(false);
private username: string | null = null;

// function to login

login(username: string, password: string): Observable<boolean>{
  if(username === 'user' && password === 'password')
    this.isAuthenicated.next(true);
    this.username = username;
    return this.isAuthenicated.asObservable();
}

// function to logout
logout(){
  this.isAuthenicated.next(false);
  this.username = null;
}
// getAuthStatus
getAuthStatus(): Observable<boolean>{
  return this.isAuthenicated.asObservable();
}
// getUsername
getUsername(): string | null {
  return this.username;
}
}

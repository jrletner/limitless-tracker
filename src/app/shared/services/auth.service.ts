import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private username: string | null = null;

  // function to login

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'password')
      this.isAuthenticated.next(true);
    this.username = username;
    return this.isAuthenticated.asObservable();
  }

  // function to logout
  logout() {
    this.isAuthenticated.next(false);
    this.username = null;
  }
  // getAuthStatus
  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
  // getUsername
  getUsername(): string | null {
    return this.username;
  }
}

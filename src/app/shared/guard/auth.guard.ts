import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let isAuth = false;
    this.authService.getAuthStatus().subscribe((authStatus) => {
      isAuth = authStatus;
    });

    if (!isAuth) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
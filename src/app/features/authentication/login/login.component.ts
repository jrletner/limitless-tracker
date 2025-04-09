import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  get debugOutput() {
    console.log('[LoginComponent] "debugOutput" binding');
    return 'InfoMessage Component Debug Output';
  }
  username = '';
  password = '';
  isAuth = false;
  loggedInUsername: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.username, this.password)
      .subscribe((authStatus) => {
        this.isAuth = authStatus;

        if (authStatus) {
          this.loggedInUsername = this.authService.getUsername();
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid username or password');
        }
      });
  }
}

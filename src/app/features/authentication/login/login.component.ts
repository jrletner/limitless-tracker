import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  isAuth = false;
  loggedInUsername: string | null = null;

  constructor(private authService: AuthService, private router: Router ){}

  login(){
    this.authService.login(this.username, this.password).subscribe((authStatus) => {
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

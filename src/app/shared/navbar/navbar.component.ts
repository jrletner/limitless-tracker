import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isAuth = false;

constructor(private authService: AuthService, private router: Router){
  this.authService.getAuthStatus().subscribe((authStatus) => {
    this.isAuth = authStatus;
  });
}

logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}

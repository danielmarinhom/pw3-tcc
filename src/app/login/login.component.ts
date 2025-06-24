import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  constructor(private router: Router) {}
  private readonly defaultUsername = 'admin';
  private readonly defaultPassword = '1234';

  login() {
    if (this.username === this.defaultUsername && this.password === this.defaultPassword) {
      alert('Login bem-sucedido!');
      this.loginError = false;
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
    }
  }
}

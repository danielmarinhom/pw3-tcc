import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  irParaHome() {
    this.router.navigate(['/home']);
  }
  irParaContato() {
    this.router.navigate(['/contato']);
  }
  irParaSobre() {
    this.router.navigate(['/sobre']);
  }
  irParaFuncionalidade() {
    this.router.navigate(['/funcionalidade']);
  }
}

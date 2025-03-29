import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {
    // Redirigir a inicio si el usuario está "logueado" (simulación)
    if (localStorage.getItem('user')) {
      this.router.navigate(['/inicio']);
    }
  }

  login(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    // Simulamos el inicio de sesión con localStorage
    const storedUser = localStorage.getItem(this.email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === this.password) {
        localStorage.setItem('user', this.email);  // Simulamos que el usuario se ha logueado
        this.router.navigate(['/landing']);
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    } else {
      this.errorMessage = 'El usuario no está registrado';
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToPanel(): void {
    this.router.navigate(['/inicio']);
  }
}

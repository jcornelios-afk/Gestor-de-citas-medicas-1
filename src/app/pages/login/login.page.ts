import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LoginPage {

  dni: string = '';
  contrasena: string = '';
  mensajeError: string = '';
  mostrarContrasena: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.mensajeError = '';

    if (!this.dni || this.dni.length !== 8) {
      this.mensajeError = 'Ingresa un DNI válido de 8 dígitos';
      return;
    }

    if (!this.contrasena) {
      this.mensajeError = 'Ingresa tu contraseña';
      return;
    }

    const pacientes = [
      { dni: '12345678', contrasena: '123456', nombre: 'Marcos Ramirez' },
      { dni: '87654321', contrasena: '654321', nombre: 'María López' }
    ];

    const paciente = pacientes.find(p => p.dni === this.dni && p.contrasena === this.contrasena);

    if (paciente) {
      localStorage.setItem('paciente', JSON.stringify(paciente));
      this.router.navigate(['/home']);
    } else {
      this.mensajeError = 'DNI o contraseña incorrectos. Si no estás registrado, acércate a ventanilla.';
    }
  }

  toggleContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
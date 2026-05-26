import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage {

  paciente: any = {};
  
  proximaCita: any = {
    especialidad: 'Cardiología',
    medico: 'Dr. Juan Pérez',
    fecha: '15 de Mayo, 2026',
    hora: '10:30 AM'
  };

  constructor(private router: Router) {
    const data = localStorage.getItem('paciente');
    if (data) {
      this.paciente = JSON.parse(data);
    }
  }

  irAgendarCita() {
    this.router.navigate(['/especialidades']);
  }

  irHistorial() {
    this.router.navigate(['/historial']);
  }

  irPerfil() {
    this.router.navigate(['/perfil']);
  }

  irNotificaciones() {
    this.router.navigate(['/notificaciones']);
  }
}
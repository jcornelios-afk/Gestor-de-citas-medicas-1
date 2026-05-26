import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class NotificacionesPage {

  notificaciones: any[] = [];

  constructor(private router: Router) {
    this.cargarNotificaciones();
  }

  cargarNotificaciones() {
    this.notificaciones = [
      {
        id: 1,
        titulo: 'Cita confirmada',
        mensaje: 'Tu cita con Dr. Carlos Mendoza ha sido confirmada para el 15 de Mayo a las 10:30 AM.',
        fecha: 'Hace 2 horas',
        leida: false,
        icono: 'checkmark-circle-outline',
        color: '#5a9e7e'
      },
      {
        id: 2,
        titulo: 'Recordatorio de cita',
        mensaje: 'Recuerda que tienes una cita mañana con Dra. Andrea Quispe a las 09:00 AM.',
        fecha: 'Hace 5 horas',
        leida: false,
        icono: 'alarm-outline',
        color: '#e8875b'
      },
      {
        id: 3,
        titulo: 'Cambio de horario',
        mensaje: 'El Dr. Roberto Vega ha modificado su horario. Tu cita del 20 de Mayo pasa a las 11:00 AM.',
        fecha: 'Ayer',
        leida: true,
        icono: 'swap-horizontal-outline',
        color: '#7b6faa'
      },
      {
        id: 4,
        titulo: 'Resultados disponibles',
        mensaje: 'Los resultados de tus análisis de Cardiología ya están disponibles.',
        fecha: 'Hace 2 días',
        leida: true,
        icono: 'document-text-outline',
        color: '#3b6fa0'
      },
      {
        id: 5,
        titulo: 'Bienvenido',
        mensaje: 'Bienvenido al sistema de citas del Hospital Sergio E. Bernales.',
        fecha: 'Hace 1 semana',
        leida: true,
        icono: 'hand-left-outline',
        color: '#c75b6e'
      }
    ];
  }

  marcarLeida(notificacion: any) {
    notificacion.leida = true;
  }

  volver() {
    this.router.navigate(['/home']);
  }
}
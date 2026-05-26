import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HistorialPage {

  citas: any[] = [];
  filtro: string = 'todas';

  constructor(private router: Router) {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = [
      {
        id: 1,
        especialidad: 'Cardiología',
        medico: 'Dr. Carlos Mendoza',
        fecha: '15 de Mayo, 2026',
        hora: '10:30 AM',
        estado: 'pendiente',
        codigo: '#CITA-2026-0042'
      },
      {
        id: 2,
        especialidad: 'Dermatología',
        medico: 'Dra. Andrea Quispe',
        fecha: '02 de Abril, 2026',
        hora: '09:00 AM',
        estado: 'completada',
        codigo: '#CITA-2026-0038'
      },
      {
        id: 3,
        especialidad: 'Medicina General',
        medico: 'Dra. Laura Espinoza',
        fecha: '18 de Marzo, 2026',
        hora: '03:00 PM',
        estado: 'completada',
        codigo: '#CITA-2026-0025'
      },
      {
        id: 4,
        especialidad: 'Pediatría',
        medico: 'Dr. Miguel Ángel Flores',
        fecha: '05 de Febrero, 2026',
        hora: '11:00 AM',
        estado: 'cancelada',
        codigo: '#CITA-2026-0012'
      }
    ];
  }

  get citasFiltradas() {
    if (this.filtro === 'todas') return this.citas;
    return this.citas.filter(c => c.estado === this.filtro);
  }

  cambiarFiltro(filtro: string) {
    this.filtro = filtro;
  }

  verDetalle(cita: any) {
    localStorage.setItem('citaDetalle', JSON.stringify(cita));
    this.router.navigate(['/detalle-cita']);
  }

  volver() {
    this.router.navigate(['/home']);
  }
}
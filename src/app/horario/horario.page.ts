import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HorarioPage {

  medico: any = {};
  especialidad: any = {};
  
  diasSemana = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  diasNumeros = [12, 13, 14, 15, 16, 17, 18];
  diaSeleccionado: number = 15;

  horasManana = ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  horasTarde = ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'];
  horaSeleccionada: string = '';

  mesActual: string = 'Mayo 2026';

  constructor(private router: Router) {
    const medicoData = localStorage.getItem('medico');
    const especialidadData = localStorage.getItem('especialidad');
    if (medicoData) this.medico = JSON.parse(medicoData);
    if (especialidadData) this.especialidad = JSON.parse(especialidadData);
  }

  seleccionarDia(dia: number) {
    this.diaSeleccionado = dia;
    this.horaSeleccionada = '';
  }

  seleccionarHora(hora: string) {
    this.horaSeleccionada = hora;
  }

  continuar() {
    if (this.diaSeleccionado && this.horaSeleccionada) {
      const cita = {
        especialidad: this.especialidad.nombre,
        medico: this.medico.nombre,
        dia: this.diaSeleccionado,
        hora: this.horaSeleccionada,
        mes: this.mesActual
      };
      localStorage.setItem('cita', JSON.stringify(cita));
      this.router.navigate(['/confirmacion']);
    }
  }

  volver() {
    this.router.navigate(['/medicos']);
  }
}
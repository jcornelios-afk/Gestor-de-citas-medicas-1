import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EspecialidadesPage {

  paciente: any = {};
  textoBusqueda: string = '';

  especialidades = [
    { id: 1, nombre: 'Cardiología', icono: 'heart-outline', medicos: 5 },
    { id: 2, nombre: 'Pediatría', icono: 'happy-outline', medicos: 4 },
    { id: 3, nombre: 'Traumatología', icono: 'fitness-outline', medicos: 3 },
    { id: 4, nombre: 'Dermatología', icono: 'sunny-outline', medicos: 2 },
    { id: 5, nombre: 'Oftalmología', icono: 'eye-outline', medicos: 3 },
    { id: 6, nombre: 'Ginecología', icono: 'flower-outline', medicos: 4 },
    { id: 7, nombre: 'Neurología', icono: 'pulse-outline', medicos: 3 },
    { id: 8, nombre: 'Odontología', icono: 'sparkles-outline', medicos: 4 },
    { id: 9, nombre: 'Psiquiatría', icono: 'chatbubbles-outline', medicos: 2 },
    { id: 10, nombre: 'Medicina General', icono: 'medkit-outline', medicos: 8 }
  ];

  constructor(private router: Router) {
    const data = localStorage.getItem('paciente');
    if (data) {
      this.paciente = JSON.parse(data);
    }
  }

  get especialidadesFiltradas() {
    if (!this.textoBusqueda) return this.especialidades;
    return this.especialidades.filter(esp =>
      esp.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  seleccionarEspecialidad(esp: any) {
    localStorage.setItem('especialidad', JSON.stringify(esp));
    this.router.navigate(['/medicos']);
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

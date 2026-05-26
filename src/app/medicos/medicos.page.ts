import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MedicosPage {

  especialidad: any = {};
  textoBusqueda: string = '';
  medicos: any[] = [];

  constructor(private router: Router) {
    const data = localStorage.getItem('especialidad');
    if (data) {
      this.especialidad = JSON.parse(data);
      this.cargarMedicos();
    }
  }

  cargarMedicos() {
  const todosMedicos = [
    // Cardiología
    { id: 1, nombre: 'Dr. Carlos Mendoza', especialidad: 'Cardiología', experiencia: '15 años', imagen: 'assets/medicos/doctor1.jpg', estrellas: 5 },
    { id: 2, nombre: 'Dra. Ana Castillo', especialidad: 'Cardiología', experiencia: '10 años', imagen: 'assets/medicos/doctor2.jpg', estrellas: 4 },
    { id: 3, nombre: 'Dr. Roberto Vega', especialidad: 'Cardiología', experiencia: '8 años', imagen: 'assets/medicos/doctor3.jpg', estrellas: 5 },
    { id: 4, nombre: 'Dra. Patricia Solís', especialidad: 'Cardiología', experiencia: '12 años', imagen: 'assets/medicos/doctor4.jpg', estrellas: 3 },
    { id: 5, nombre: 'Dr. Fernando Ríos', especialidad: 'Cardiología', experiencia: '6 años', imagen: 'assets/medicos/doctor5.jpg', estrellas: 4 },
    // Pediatría
    { id: 6, nombre: 'Dr. Miguel Ángel Flores', especialidad: 'Pediatría', experiencia: '20 años', imagen: 'assets/medicos/doctor1.jpg', estrellas: 5 },
    { id: 7, nombre: 'Dra. Lucía Fernández', especialidad: 'Pediatría', experiencia: '8 años', imagen: 'assets/medicos/doctor2.jpg', estrellas: 4 },
    { id: 8, nombre: 'Dr. Ricardo Palma', especialidad: 'Pediatría', experiencia: '14 años', imagen: 'assets/medicos/doctor3.jpg', estrellas: 4 },
    // Traumatología
    { id: 9, nombre: 'Dra. Carmen Ruiz', especialidad: 'Traumatología', experiencia: '9 años', imagen: 'assets/medicos/doctor4.jpg', estrellas: 5 },
    { id: 10, nombre: 'Dr. José Delgado', especialidad: 'Traumatología', experiencia: '18 años', imagen: 'assets/medicos/doctor5.jpg', estrellas: 4 },
    // Dermatología
    { id: 11, nombre: 'Dra. Andrea Quispe', especialidad: 'Dermatología', experiencia: '7 años', imagen: 'assets/medicos/doctor1.jpg', estrellas: 4 },
    { id: 12, nombre: 'Dr. Luis Santillán', especialidad: 'Dermatología', experiencia: '11 años', imagen: 'assets/medicos/doctor2.jpg', estrellas: 5 },
    // Oftalmología
    { id: 13, nombre: 'Dra. Mónica Herrera', especialidad: 'Oftalmología', experiencia: '13 años', imagen: 'assets/medicos/doctor3.jpg', estrellas: 5 },
    { id: 14, nombre: 'Dr. Rafael Torres', especialidad: 'Oftalmología', experiencia: '16 años', imagen: 'assets/medicos/doctor4.jpg', estrellas: 4 },
    // Ginecología
    { id: 15, nombre: 'Dra. Silvia Paredes', especialidad: 'Ginecología', experiencia: '10 años', imagen: 'assets/medicos/doctor5.jpg', estrellas: 5 },
    { id: 16, nombre: 'Dr. Alberto Campos', especialidad: 'Ginecología', experiencia: '22 años', imagen: 'assets/medicos/doctor1.jpg', estrellas: 4 },
    // Neurología
    { id: 17, nombre: 'Dra. Rosa Jiménez', especialidad: 'Neurología', experiencia: '6 años', imagen: 'assets/medicos/doctor2.jpg', estrellas: 4 },
    { id: 18, nombre: 'Dr. Francisco León', especialidad: 'Neurología', experiencia: '15 años', imagen: 'assets/medicos/doctor3.jpg', estrellas: 5 },
    // Odontología
    { id: 19, nombre: 'Dra. Teresa Blanco', especialidad: 'Odontología', experiencia: '12 años', imagen: 'assets/medicos/doctor4.jpg', estrellas: 4 },
    { id: 20, nombre: 'Dr. Jorge Medina', especialidad: 'Odontología', experiencia: '9 años', imagen: 'assets/medicos/doctor5.jpg', estrellas: 5 },
    // Psiquiatría
    { id: 21, nombre: 'Dra. Diana Vargas', especialidad: 'Psiquiatría', experiencia: '5 años', imagen: 'assets/medicos/doctor1.jpg', estrellas: 4 },
    { id: 22, nombre: 'Dr. Pedro Castillo', especialidad: 'Psiquiatría', experiencia: '25 años', imagen: 'assets/medicos/doctor2.jpg', estrellas: 5 },
    // Medicina General
    { id: 23, nombre: 'Dra. Laura Espinoza', especialidad: 'Medicina General', experiencia: '8 años', imagen: 'assets/medicos/doctor3.jpg', estrellas: 4 },
    { id: 24, nombre: 'Dr. Fernando Ríos', especialidad: 'Medicina General', experiencia: '6 años', imagen: 'assets/medicos/doctor4.jpg', estrellas: 5 },
    { id: 25, nombre: 'Dra. Patricia Solís', especialidad: 'Medicina General', experiencia: '12 años', imagen: 'assets/medicos/doctor5.jpg', estrellas: 4 },
  ];
  this.medicos = todosMedicos.filter(m => m.especialidad === this.especialidad.nombre);
}

  get medicosFiltrados() {
    if (!this.textoBusqueda) return this.medicos;
    return this.medicos.filter(m =>
      m.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  getEstrellas(cantidad: number): number[] {
    return Array(cantidad).fill(0);
  }

  getEstrellasVacias(cantidad: number): number[] {
    return Array(5 - cantidad).fill(0);
  }

  seleccionarMedico(medico: any) {
    localStorage.setItem('medico', JSON.stringify(medico));
    this.router.navigate(['/horario']);
  }

  volver() {
    this.router.navigate(['/especialidades']);
  }
}
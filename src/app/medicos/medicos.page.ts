import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MedicosPage implements OnInit {

  especialidad: any = {};
  textoBusqueda: string = '';
  medicos: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) {
    const data = localStorage.getItem('especialidad');
    if (data) {
      this.especialidad = JSON.parse(data);
    }
  }

  async ngOnInit() {
    if (this.especialidad.id) {
      this.medicos = await this.firebaseService.getMedicosPorEspecialidad(this.especialidad.id);
    }
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
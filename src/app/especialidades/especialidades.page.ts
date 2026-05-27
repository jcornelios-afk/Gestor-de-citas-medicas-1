import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EspecialidadesPage implements OnInit {

  textoBusqueda: string = '';
  especialidades: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  async ngOnInit() {
    this.especialidades = await this.firebaseService.getEspecialidades();
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
    this.firebaseService.cerrarSesion();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
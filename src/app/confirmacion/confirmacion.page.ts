import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ConfirmacionPage {

  cita: any = {};

  constructor(private router: Router) {
    const citaData = localStorage.getItem('cita');
    if (citaData) {
      this.cita = JSON.parse(citaData);
    }
  }

  volverHome() {
    this.router.navigate(['/home']);
  }
}
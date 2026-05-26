import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login-routing.module').then(m => m.LoginPageRoutingModule)
  },
  {
    path: 'especialidades',
    loadComponent: () => import('./especialidades/especialidades.page').then(m => m.EspecialidadesPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'medicos',
    loadComponent: () => import('./medicos/medicos.page').then(m => m.MedicosPage)
  },
  {
    path: 'horario',
    loadComponent: () => import('./horario/horario.page').then( m => m.HorarioPage)
  },
  {
    path: 'confirmacion',
    loadComponent: () => import('./confirmacion/confirmacion.page').then( m => m.ConfirmacionPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./historial/historial.page').then( m => m.HistorialPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
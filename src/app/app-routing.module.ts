import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirecciona a inicio por defecto
  { path: 'inicio', component: InicioComponent }, // Página de inicio
  { path: 'mascotas', component: ListaMascotasComponent }, // Lista de mascotas
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent }, // Editar una mascota por ID
  { path: 'mascotas/agregar', component: EditarMascotasComponent }, // Agregar una nueva mascota
  { path: 'solicitudes', component: ListaSolicitudesComponent }, // Lista de solicitudes
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent }, // Editar una solicitud por ID
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent }, // Agregar una nueva solicitud
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

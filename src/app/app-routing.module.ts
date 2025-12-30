import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosSolicitanteComponent } from './datos-solicitante/datos-solicitante.component';
import { HomeComponent } from './home/home.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { DatosDescripcionComponent } from './datos-descripcion/datos-descripcion.component';
import { DatosAdjuntosComponent } from './datos-adjuntos/datos-adjuntos.component';

const routes: Routes = [ // Route for the default path (homepage)
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'solicitante', component: DatosSolicitanteComponent },
  { path: 'paciente', component: DatosPacienteComponent },
  { path: 'descripcion', component: DatosDescripcionComponent },
{ path: 'adjuntos', component: DatosAdjuntosComponent }




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

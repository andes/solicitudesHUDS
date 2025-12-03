import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosSolicitanteComponent } from './datos-solicitante/datos-solicitante.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ // Route for the default path (homepage)
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'solicitante', component: DatosSolicitanteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

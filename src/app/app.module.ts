import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosSolicitanteComponent } from './datos-solicitante/datos-solicitante.component';
import { HomeComponent } from './home/home.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { DatosDescripcionComponent } from './datos-descripcion/datos-descripcion.component';
import { DatosAdjuntosComponent } from './datos-adjuntos/datos-adjuntos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosSolicitanteComponent,
    HomeComponent,
    DatosPacienteComponent,
    DatosDescripcionComponent,
    DatosAdjuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

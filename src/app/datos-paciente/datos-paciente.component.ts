import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.scss']
})
export class DatosPacienteComponent {

    constructor(private router: Router, private location: Location) {}
    
    goto() {
    this.router.navigate(['/descripcion']);
  }

  vuelve() {
    this.location.back();
  }
}

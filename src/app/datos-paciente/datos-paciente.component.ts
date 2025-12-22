import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.scss']
})
export class DatosPacienteComponent {

    constructor(private router: Router) {}
    
    goto() {
    this.router.navigate(['/descripcion']);
  }
}

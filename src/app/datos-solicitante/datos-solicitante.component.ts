import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-solicitante',
  templateUrl: './datos-solicitante.component.html',
  styleUrls: ['./datos-solicitante.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatosSolicitanteComponent {

    constructor(private router: Router) {}
  
  goto() {
  this.router.navigate(['/paciente']);
}

}

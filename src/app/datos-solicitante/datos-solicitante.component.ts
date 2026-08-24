import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-solicitante',
  templateUrl: './datos-solicitante.component.html',
  styleUrls: ['./datos-solicitante.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatosSolicitanteComponent {

    constructor(private router: Router, private location: Location) {}
  
  goto() {
  this.router.navigate(['/paciente']);
}

vuelve() {
  this.location.back();
}

}

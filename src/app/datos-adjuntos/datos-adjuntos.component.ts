import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-adjuntos',
  templateUrl: './datos-adjuntos.component.html',
  styleUrls: ['./datos-adjuntos.component.scss']
})
export class DatosAdjuntosComponent {
  constructor(private router: Router, private location: Location) { }

  goto() {
    this.router.navigate(['/confirmacion']);
  }
  vuelve() {
    this.location.back();
  }
}

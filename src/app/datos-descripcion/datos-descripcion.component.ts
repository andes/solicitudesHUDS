import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-descripcion',
  templateUrl: './datos-descripcion.component.html',
  styleUrls: ['./datos-descripcion.component.scss']
})
export class DatosDescripcionComponent {
 constructor(private router: Router) {}
    
    goto() {
    this.router.navigate(['/adjuntos']);
  }
}

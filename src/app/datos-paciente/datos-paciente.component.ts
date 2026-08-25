import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.scss']
})
export class DatosPacienteComponent {

    constructor(
        private router: Router,
        private location: Location,
        public solicitudService: SolicitudService
    ) {}

    onGeneroChange(value: string) {
        const generoId: Record<string, number> = {
            Masculino: 1,
            Femenino: 2,
            'No binario': 3
        };
        this.solicitudService.paciente.genero = {
            id: generoId[value] || null,
            tipo: value
        };
    }

    goto() {
        this.router.navigate(['/descripcion']);
    }

    vuelve() {
        this.location.back();
    }
}

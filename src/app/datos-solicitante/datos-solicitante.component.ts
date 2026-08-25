import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-datos-solicitante',
  templateUrl: './datos-solicitante.component.html',
  styleUrls: ['./datos-solicitante.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatosSolicitanteComponent {
    tipoDocumentoSeleccionado = '';
    organismoSeleccionado = '';
    numeroDocumento: number | null = null;

    private readonly organismos = [
        'Juzgado Nº 1',
        'Juzgado Nº 2',
        'Juzgado Nº 3',
        'Abogado particular',
        'Otro'
    ];

    constructor(
        private router: Router,
        private location: Location,
        public solicitudService: SolicitudService
    ) {}

    onTipoDocumentoChange(value: string) {
        this.tipoDocumentoSeleccionado = value;
        this.numeroDocumento = null;
        this.solicitudService.solicitante.tipoDocumento = { dni: null, pasaporte: null };
    }

    onOrganismoChange(value: string) {
        this.organismoSeleccionado = value;
        this.solicitudService.solicitante.organismo = {
            nombre: value,
            codigo: this.organismos.indexOf(value) + 1 || null,
            otro: value === 'Otro' ? this.solicitudService.solicitante.organismo.otro : ''
        };
    }

    goto() {
        this.solicitudService.solicitante.tipoDocumento = {
            dni: this.tipoDocumentoSeleccionado === 'DNI' ? this.numeroDocumento : null,
            pasaporte: this.tipoDocumentoSeleccionado === 'Pasaporte' ? this.numeroDocumento : null
        };
        this.router.navigate(['/paciente']);
    }

    vuelve() {
        this.location.back();
    }
}

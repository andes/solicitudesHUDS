import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-datos-adjuntos',
  templateUrl: './datos-adjuntos.component.html',
  styleUrls: ['./datos-adjuntos.component.scss']
})
export class DatosAdjuntosComponent {
    archivosSeleccionados: File[] = [];

    constructor(
        private router: Router,
        private location: Location,
        public solicitudService: SolicitudService
    ) { }

    onFileSelected(event: any) {
        const files: FileList = event.target.files;
        if (files) {
            this.archivosSeleccionados = Array.from(files);
            // Guardar metadata de los archivos en el servicio
            this.solicitudService.pedido.adjuntos = this.archivosSeleccionados.map(f => ({
                nombre: f.name,
                path: '',
                size: f.size,
                mimetype: f.type,
                fecha: new Date()
            }));
        }
    }

    goto() {
        this.router.navigate(['/confirmacion']);
    }

    vuelve() {
        this.location.back();
    }
}

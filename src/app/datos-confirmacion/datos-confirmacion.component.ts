import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-datos-confirmacion',
  templateUrl: './datos-confirmacion.component.html',
  styleUrls: ['./datos-confirmacion.component.scss']
})
export class DatosConfirmacionComponent implements OnInit {
    enviando = false;
    enviado = false;
    error = '';

    constructor(public solicitudService: SolicitudService) {}

    ngOnInit(): void {
        this.enviar();
    }

    enviar() {
        this.enviando = true;
        this.error = '';
        this.solicitudService.enviarSolicitud().subscribe({
            next: (resultado) => {
                this.enviando = false;
                this.enviado = true;
                console.log('Solicitud creada:', resultado);
            },
            error: (err) => {
                this.enviando = false;
                this.error = err.error?.error || err.message || 'Error al enviar la solicitud';
                console.error('Error:', err);
            }
        });
    }
}

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
    codigoEmail = '';
    mostrandoCodigo = false;
    enviandoCodigo = false;
    verificandoCodigo = false;
    emailVerificado = false;
    mensajeEmail = '';
    errorEmail = '';

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
    ) { }

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

    get emailEnmascarado(): string {
        const email = (this.solicitudService.solicitante.email || '').trim();
        if (!email || !email.includes('@')) {
            return email;
        }
        const [user, domain] = email.split('@');
        if (user.length <= 4) {
            return `${user}.........@${domain}`;
        }
        const visiblePrefix = user.slice(0, 6);
        return `${visiblePrefix}.........@${domain}`;
    }

    onEmailChange(value: string) {
        this.emailVerificado = false;
        this.mostrandoCodigo = false;
        this.solicitudService.solicitante.codigoEmail = '';
        this.mensajeEmail = '';
        this.errorEmail = '';
    }

    onCodigoInput() {
        this.errorEmail = '';
        const codigo = (this.solicitudService.solicitante.codigoEmail || '').trim();
        if (codigo.length === 6 && /^\d{6}$/.test(codigo) && !this.verificandoCodigo && !this.emailVerificado) {
            this.verificarCodigoEmail();
        }
    }


    enviarCodigoEmail() {
        const email = this.solicitudService.solicitante.email.trim();
        if (this.emailVerificado || this.enviandoCodigo) {
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.errorEmail = 'Ingresá un email válido para recibir el código.';
            return;
        }

        this.enviandoCodigo = true;
        this.errorEmail = '';
        this.mensajeEmail = '';
        this.solicitudService.enviarCodigoEmail(email).subscribe({
            next: () => {
                this.enviandoCodigo = false;
                this.mostrandoCodigo = true;
                this.mensajeEmail = 'Te enviamos un código de verificación a tu email.';
            },
            error: (err) => {
                this.enviandoCodigo = false;
                this.errorEmail = err.error?.error || 'No pudimos enviar el código. Revisá el email e intentá nuevamente.';
            }
        });
    }

    verificarCodigoEmail() {
        const email = this.solicitudService.solicitante.email.trim();
        const codigo = this.solicitudService.solicitante.codigoEmail.trim();
        if (!/^\d{4,6}$/.test(codigo)) {
            this.errorEmail = 'Ingresá el código numérico que recibiste por email.';
            return;
        }

        this.verificandoCodigo = true;
        this.errorEmail = '';
        this.solicitudService.validarCodigoEmail(email, codigo).subscribe({
            next: () => {
                this.verificandoCodigo = false;
                this.emailVerificado = true;
                this.mensajeEmail = 'Email verificado correctamente.';
            },
            error: (err) => {
                this.verificandoCodigo = false;
                this.emailVerificado = false;
                this.errorEmail = err.error?.error || 'El código no es válido o ya venció.';
            }
        });
    }

    goto() {
        if (!this.emailVerificado) {
            this.errorEmail = 'Verificá tu email antes de continuar.';
            return;
        }

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

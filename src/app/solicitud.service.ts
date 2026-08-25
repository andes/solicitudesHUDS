import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DatosSolicitante {
    nombre: string;
    apellido: string;
    tipoDocumento: {
        dni: number | null;
        pasaporte: number | null;
    };
    email: string;
    telefono: number | null;
    organismo: {
        nombre: string;
        codigo: number | null;
        otro: string;
    };
}

export interface DatosPaciente {
    nombre: string;
    apellido: string;
    documento: number | null;
    email: string;
    fechadeNacimiento: string;
    genero: {
        id: number | null;
        tipo: string;
    };
}

export interface DatosPedido {
    institucion: {
        id: number | null;
        nombre: string;
    };
    descripcion: string;
    efector: {
        id: number | null;
        nombre: string;
    };
    efectorParticular: string;
    adjuntos: any[];
}

@Injectable({
    providedIn: 'root'
})
export class SolicitudService {
    private baseUrl = 'http://localhost:3005';

    solicitante: DatosSolicitante = {
        nombre: '',
        apellido: '',
        tipoDocumento: { dni: null, pasaporte: null },
        email: '',
        telefono: null,
        organismo: { nombre: '', codigo: null, otro: '' }
    };

    paciente: DatosPaciente = {
        nombre: '',
        apellido: '',
        documento: null,
        email: '',
        fechadeNacimiento: '',
        genero: { id: null, tipo: '' }
    };

    pedido: DatosPedido = {
        institucion: { id: null, nombre: '' },
        descripcion: '',
        efector: { id: null, nombre: '' },
        efectorParticular: '',
        adjuntos: []
    };

    constructor(private http: HttpClient) { }

    /**
     * Envía toda la solicitud al microservicio en un solo POST.
     */
    enviarSolicitud(): Observable<any> {
        const body = {
            solicitante: this.solicitante,
            paciente: this.paciente,
            pedido: this.pedido,
        };
        return this.http.post(`${this.baseUrl}/solicitudes`, body);
    }

    /**
     * Resetea todos los datos del wizard.
     */
    reset(): void {
        this.solicitante = {
            nombre: '',
            apellido: '',
            tipoDocumento: { dni: null, pasaporte: null },
            email: '',
            telefono: null,
            organismo: { nombre: '', codigo: null, otro: '' }
        };
        this.paciente = {
            nombre: '',
            apellido: '',
            documento: null,
            email: '',
            fechadeNacimiento: '',
            genero: { id: null, tipo: '' }
        };
        this.pedido = {
            institucion: { id: null, nombre: '' },
            descripcion: '',
            efector: { id: null, nombre: '' },
            efectorParticular: '',
            adjuntos: []
        };
    }
}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(private router: Router) { }

    ngOnInit(): void {
        document.body.style.backgroundColor = '#FCF2DC';
    }

    ngOnDestroy(): void {
        document.body.style.backgroundColor = '#FFFFFF';
    }

    iniciar() {
        this.router.navigate(['/solicitante']);
    }
}

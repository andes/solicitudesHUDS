import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datos-descripcion',
  templateUrl: './datos-descripcion.component.html',
  styleUrls: ['./datos-descripcion.component.scss']
})
export class DatosDescripcionComponent {
  readonly institutions = [
    { value: 'HTAL1', label: 'HTAL PROV NEUQUÉN - DR EDUARDO CASTRO RENDÓN' },
    { value: 'HTAL2', label: 'HTAL HELLER - DR HORACIO BURD' },
    { value: 'HTAL3', label: 'HTAL BOUQUET ROLDAN' },
    { value: 'HTAL4', label: 'HTAL CENTENARIO - DR NATALIO BURD' },
    { value: 'HTAL5', label: 'HTAL SENILLOSA' },
    { value: 'SUBSECRETERIA DE SALUD', label: 'SUBSECRETERIA DE SALUD' },
    { value: 'CDS', label: 'CENTRO DE SALUD' }
  ];

  readonly efectores = this.institutions.map((institution, index) => ({
    ...institution,
    value: `Efector${index + 1}`
  }));

  selectedInstitution = '';
  selectedEfector = '';
  openDropdown: 'institution' | 'efector' | null = null;

  constructor(
    private router: Router,
    private location: Location,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent): void {
    if (event.target instanceof Node && !this.elementRef.nativeElement.contains(event.target)) {
      this.openDropdown = null;
    }
  }

  toggleDropdown(dropdown: 'institution' | 'efector'): void {
    this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
  }

  selectOption(dropdown: 'institution' | 'efector', value: string): void {
    if (dropdown === 'institution') {
      this.selectedInstitution = value;
    } else {
      this.selectedEfector = value;
    }
    this.openDropdown = null;
  }

  getOptionLabel(options: ReadonlyArray<{ value: string; label: string }>, value: string): string {
    return options.find((option) => option.value === value)?.label ?? '';
  }
    
  goto() {
    this.router.navigate(['/adjuntos']);
  }

  vuelve() {
    this.location.back();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDescripcionComponent } from './datos-descripcion.component';

describe('DatosDescripcionComponent', () => {
  let component: DatosDescripcionComponent;
  let fixture: ComponentFixture<DatosDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

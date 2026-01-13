import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosConfirmacionComponent } from './datos-confirmacion.component';

describe('DatosConfirmacionComponent', () => {
  let component: DatosConfirmacionComponent;
  let fixture: ComponentFixture<DatosConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

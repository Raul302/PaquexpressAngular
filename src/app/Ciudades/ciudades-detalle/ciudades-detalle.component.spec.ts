import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesDetalleComponent } from './ciudades-detalle.component';

describe('CiudadesDetalleComponent', () => {
  let component: CiudadesDetalleComponent;
  let fixture: ComponentFixture<CiudadesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

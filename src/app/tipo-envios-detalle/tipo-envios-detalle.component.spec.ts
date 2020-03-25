import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEnviosDetalleComponent } from './tipo-envios-detalle.component';

describe('TipoEnviosDetalleComponent', () => {
  let component: TipoEnviosDetalleComponent;
  let fixture: ComponentFixture<TipoEnviosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEnviosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEnviosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

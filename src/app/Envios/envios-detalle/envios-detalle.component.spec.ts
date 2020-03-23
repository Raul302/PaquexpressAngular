import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosDetalleComponent } from './envios-detalle.component';

describe('EnviosDetalleComponent', () => {
  let component: EnviosDetalleComponent;
  let fixture: ComponentFixture<EnviosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesDetalleComponent } from './transportes-detalle.component';

describe('TransportesDetalleComponent', () => {
  let component: TransportesDetalleComponent;
  let fixture: ComponentFixture<TransportesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresDetalleComponent } from './vendedores-detalle.component';

describe('VendedoresDetalleComponent', () => {
  let component: VendedoresDetalleComponent;
  let fixture: ComponentFixture<VendedoresDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedoresDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoresDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

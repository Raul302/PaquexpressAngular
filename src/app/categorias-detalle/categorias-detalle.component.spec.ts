import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasDetalleComponent } from './categorias-detalle.component';

describe('CategoriasDetalleComponent', () => {
  let component: CategoriasDetalleComponent;
  let fixture: ComponentFixture<CategoriasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

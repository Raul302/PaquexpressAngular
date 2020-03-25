import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEnviosComponent } from './tipo-envios.component';

describe('TipoEnviosComponent', () => {
  let component: TipoEnviosComponent;
  let fixture: ComponentFixture<TipoEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

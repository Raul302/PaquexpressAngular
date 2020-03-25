import { TestBed } from '@angular/core/testing';

import { TipoenvioService } from './tipoenvio.service';

describe('TipoenvioService', () => {
  let service: TipoenvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoenvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

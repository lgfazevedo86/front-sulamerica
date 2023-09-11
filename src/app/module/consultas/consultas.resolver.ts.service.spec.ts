import { TestBed } from '@angular/core/testing';

import { ConsultasResolverTsService } from './consultas.resolver.ts.service';

describe('ConsultasResolverTsService', () => {
  let service: ConsultasResolverTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasResolverTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

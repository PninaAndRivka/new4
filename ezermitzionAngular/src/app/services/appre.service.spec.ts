import { TestBed } from '@angular/core/testing';

import { AppreService } from './appre.service';

describe('AppreService', () => {
  let service: AppreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

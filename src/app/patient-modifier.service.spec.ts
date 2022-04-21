import { TestBed } from '@angular/core/testing';

import { PatientModifierService } from './patient-modifier.service';

describe('PatientModifierService', () => {
  let service: PatientModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

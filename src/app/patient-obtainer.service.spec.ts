import { TestBed } from '@angular/core/testing';

import { PatientObtainerService } from './patient-obtainer.service';

describe('PatientObtainerService', () => {
  let service: PatientObtainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientObtainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

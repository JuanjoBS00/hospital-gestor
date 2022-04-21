import { TestBed } from '@angular/core/testing';

import { PatientAdderService } from './patient-adder.service';

describe('PatientAdderService', () => {
  let service: PatientAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

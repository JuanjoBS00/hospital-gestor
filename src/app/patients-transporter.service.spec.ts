import { TestBed } from '@angular/core/testing';

import { PatientsTransporterService } from './patients-transporter.service';

describe('PatientsTransporterService', () => {
  let service: PatientsTransporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsTransporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

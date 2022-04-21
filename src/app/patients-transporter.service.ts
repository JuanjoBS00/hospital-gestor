import { Injectable } from '@angular/core';
import { Patient } from './patient-interface';

@Injectable({
  providedIn: 'root'
})
export class PatientsTransporterService {

  patientlist!: Patient[];

  constructor() { }

  public setPatients(patientlist: Patient[]) {
    this.patientlist = patientlist;
  }
  
  public getPatients() {
    return this.patientlist;
  }


}

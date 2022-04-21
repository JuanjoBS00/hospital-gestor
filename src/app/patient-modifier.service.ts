import { Injectable } from '@angular/core';
import { Patient } from './patient-interface';

@Injectable({
  providedIn: 'root'
})
export class PatientModifierService {

  patient!: Patient;
  patientlist!: Patient [];

  constructor() { }

  public setPatient(patient: Patient){
    this.patient = patient;
  }

  public setPatients(patientlist: Patient[]){
    this.patientlist = patientlist;
  }

  public modify(){
    for(var i = 0; i < this.patientlist.length; i++) {
      if(this.patientlist[i].id == this.patient.id) {
          this.patientlist[i] = this.patient;
      }
    }
    return this.patientlist;

  }

}

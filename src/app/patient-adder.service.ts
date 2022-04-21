import { Injectable } from '@angular/core';
import { Patient } from './patient-interface';

@Injectable({
  providedIn: 'root'
})
export class PatientAdderService {

  patient!: Patient;
  patientlist!: Patient[];

  constructor() { }

  public setPatient(patient: Patient){  
    this.patient = patient;

  }

  public setPatients(patientlist: Patient[]){
    this.patientlist = patientlist;
  }

  public add() {

    var newPatientid = -1;

    for(var i = 0; i < this.patientlist.length; i++) {
      if(this.patientlist[i].id > newPatientid) {
        newPatientid = this.patientlist[i].id;
      }
    }

    newPatientid++;
    this.patient.id = newPatientid;

    this.patientlist.push(this.patient);

    return this.patientlist;

  }

}

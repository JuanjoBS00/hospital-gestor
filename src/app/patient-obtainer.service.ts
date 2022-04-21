import { Injectable } from '@angular/core';
import { Patient } from './patient-interface';

@Injectable({
  providedIn: 'root'
})
export class PatientObtainerService {

  patientlist!: Patient[];

  constructor() { }

  public setPatients(patientlist: Patient[]){

    this.patientlist = patientlist;

  }

  public search(id: number) {

    for(var i = 0; i < this.patientlist.length; i++) {
      if(this.patientlist[i].id == id) {
        return this.patientlist[i];
      }
    }

    return this.patientlist[0];
  }



}

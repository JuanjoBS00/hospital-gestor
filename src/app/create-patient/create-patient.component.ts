import { Component, OnInit } from '@angular/core';
import { PatientAdderService } from '../patient-adder.service';
import { Patient } from '../patient-interface';
import { Router } from '@angular/router';
import { PatientsTransporterService } from '../patients-transporter.service';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient!: Patient;
  originalPatients!: Patient[];
  finalPatients!: Patient[];


  constructor(private router: Router, private _patientAdderService: PatientAdderService, private _PatientTransporterService: PatientsTransporterService ) { }

  ngOnInit(): void {
    this.patient = {id: 0, nombre : "", apellidos: "", telefono: 928112233, dni: "", tarjetaSanitaria: "", enfermedad: ""};
    this.originalPatients = this._PatientTransporterService.getPatients();
  }

  addPatient() {
    this._patientAdderService.setPatient(this.patient);
    this._patientAdderService.setPatients(this.originalPatients);
    this.finalPatients = this._patientAdderService.add();
    this._PatientTransporterService.setPatients(this.finalPatients);
    this.router.navigate(['/patients']);
  }

}

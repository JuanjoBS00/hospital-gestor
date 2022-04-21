import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient-interface';
import { Router } from '@angular/router';
import { PatientObtainerService } from '../patient-obtainer.service';
import { PatientsTransporterService } from '../patients-transporter.service';
import { PatientModifierService } from '../patient-modifier.service';


@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {

  public id!: number;
  patient!: Patient;
  originalPatients!: Patient[];
  finalPatients!: Patient[];


  constructor(private route: ActivatedRoute, private _patientObtainerService: PatientObtainerService, 
    private router: Router, private _patientModifierService: PatientModifierService, 
    private _patientTransporterService: PatientsTransporterService) { }
    

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.patient = this._patientObtainerService.search(this.id);
      this.originalPatients = this._patientTransporterService.getPatients();
  }

  modifyPatient() {
    this._patientModifierService.setPatient(this.patient);
    this._patientModifierService.setPatients(this.originalPatients);
    this.finalPatients = this._patientModifierService.modify();
    this._patientTransporterService.setPatients(this.finalPatients);
    this.router.navigate(['/patients']);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { Patient } from '../patient-interface';
import { PatientObtainerService } from '../patient-obtainer.service';
import { PatientsTransporterService } from '../patients-transporter.service';



@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientlist : Patient[] = [
    {"id":1, "nombre":"Pepe", "apellidos":"Moreno Pérez", "telefono":928436643, "dni":"45387109K", "tarjetaSanitaria":"BGKX004499816015", "enfermedad":"COVID-19"},
    {"id":2, "nombre":"Sara", "apellidos":"González Fuertes", "telefono":928931113, "dni":"47384459Q", "tarjetaSanitaria":"BGKX004499817764", "enfermedad":"Gastroentiritis"},
    {"id":3, "nombre":"Ariday", "apellidos":"Ríos Díaz", "telefono":928345678, "dni":"41787109V", "tarjetaSanitaria":"BLAX024429899010", "enfermedad":"Alopecia"},
    {"id":4, "nombre":"Mateu", "apellidos":"Lahoz López", "telefono":928999643, "dni":"48389101K", "tarjetaSanitaria":"KGFX014129861015", "enfermedad":"Rinitis"},
    {"id":5, "nombre":"Marta", "apellidos":"Gil Pérez", "telefono":928555641, "dni":"45323679T", "tarjetaSanitaria":"ASLX004499817067", "enfermedad":"Miocarditis"},
  ];

    // CRUD Table Configuration
    @ViewChild(MatTable) table!: MatTable<Element>; 
    tableColumns: string[] = ['id','nombre', 'apellidos', 'telefono', 'dni', 'tarjetaSanitaria', 'enfermedad', 'detalles', 'editar', 'eliminar']; 
  
    // Creation of a patient and sets a variable which stores the id of the patient chosen to be seen 
    patient!: Patient;
    idChosen = -1;

  constructor(private router: Router, private _patientObtainerService: PatientObtainerService, private _patientsTransporterService: PatientsTransporterService) { }

  ngOnInit(): void {
    //if a the patientlist is modified then it is actualized by the patientsTransporterService
    if(this._patientsTransporterService.getPatients() != undefined) {
      this.patientlist = this._patientsTransporterService.getPatients();
    }
  }

  //Opens the PatientDetailComponent
  watchPatientDetails(idObtained: number){
    this._patientObtainerService.setPatients(this.patientlist);
    this.idChosen = idObtained;
  }

  //Closes the PatientDetailComponent
  closeDetails(flag: string) {
    if(flag == "true") {
      this.idChosen = -1;
    }
  }

  
  createPatient(){
    this._patientObtainerService.setPatients(this.patientlist);
    this.router.navigate(['/create-patient']);
  }


  updatePatient(idObtained: number){
    this._patientObtainerService.setPatients(this.patientlist);
    this._patientsTransporterService.setPatients(this.patientlist);
    this.router.navigate(['/modify-patient', idObtained]);
  }
  
  
  removePatient(idObtained: number) {
    for(var i = 0; i < this.patientlist.length; i++) {
      if(this.patientlist[i].id == idObtained) {
        this.patientlist.splice(i, 1);
        this.table.renderRows();
      }
    }
  }

}

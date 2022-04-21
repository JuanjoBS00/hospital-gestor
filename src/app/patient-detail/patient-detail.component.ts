import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient-interface';
import { PatientObtainerService } from '../patient-obtainer.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  @Input() id = -1; 
  @Output() flag = new EventEmitter<string>(); 

  patient!: Patient;

  constructor(private actRoute: ActivatedRoute, private _patientObtainerService: PatientObtainerService ) { }

  ngOnInit(): void {
    this.patient = this._patientObtainerService.search(this.id);
  }

  closeOrder() {
    this.flag.emit("true");
  }

}

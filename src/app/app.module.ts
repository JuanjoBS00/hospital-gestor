import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { AboutComponent } from './about/about.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsComponent,
    SpecialtiesComponent,
    AboutComponent,
    ModifyPatientComponent,
    CreatePatientComponent,
    PatientDetailComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'modify-patient/:id', component: ModifyPatientComponent},
  { path: 'create-patient', component: CreatePatientComponent},
  { path: 'specialties', component: SpecialtiesComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
                                  PatientsComponent,
                                  ModifyPatientComponent,
                                  CreatePatientComponent,
                                  SpecialtiesComponent,
                                  AboutComponent,
                                  PagenotfoundComponent
]

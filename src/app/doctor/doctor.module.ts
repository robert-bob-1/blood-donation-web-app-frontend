import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    DoctorHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }

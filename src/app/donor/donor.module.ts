import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonorRoutingModule } from './donor-routing.module';



@NgModule({
  declarations: [
    DonorHomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DonorRoutingModule
  ]
})
export class DonorModule { }

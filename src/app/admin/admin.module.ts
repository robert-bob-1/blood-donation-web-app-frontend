import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule,} from '@angular/material/table'  
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LayoutComponent } from '@app/donor/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddDoctorDialogComponent } from './admin-home/add-doctor-dialog/add-doctor-dialog.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    AddDoctorDialogComponent
  ],
  entryComponents: [
    AddDoctorDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AdminModule { }

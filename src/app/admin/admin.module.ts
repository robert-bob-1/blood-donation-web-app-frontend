import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule,} from '@angular/material/table'  
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LayoutComponent } from '@app/donor/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddDoctorDialogComponent } from './admin-home/add-doctor-dialog/add-doctor-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditDoctorDialogComponent } from './admin-home/edit-doctor-dialog/edit-doctor-dialog.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AddDoctorDialogComponent,
    EditDoctorDialogComponent
  ],
  entryComponents: [
    AddDoctorDialogComponent,
    EditDoctorDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AdminModule { }

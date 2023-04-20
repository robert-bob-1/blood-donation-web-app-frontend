import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonorRoutingModule } from './donor-routing.module';
import { MatTableModule } from '@angular/material/table';
import { EditDonorDialogComponent } from './donor-home/edit-donor-dialog/edit-donor-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DonorHomeComponent,
    LayoutComponent,
    EditDonorDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DonorRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DonorModule { }

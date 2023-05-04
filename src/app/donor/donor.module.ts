import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { MakeAppointmentDialogComponent } from './donor-home/make-appointment-dialog/make-appointment-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DonorHomeComponent,
    LayoutComponent,
    EditDonorDialogComponent,
    MakeAppointmentDialogComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    DatePipe
  ]
})
export class DonorModule { }

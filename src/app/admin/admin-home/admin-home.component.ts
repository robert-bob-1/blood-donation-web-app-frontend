import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '@app/_models/doctor';
import { DoctorService } from '@app/_services/users/doctor.service';
import { AddDoctorDialogComponent } from './add-doctor-dialog/add-doctor-dialog.component';
import { EditDoctorDialogComponent } from './edit-doctor-dialog/edit-doctor-dialog.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  public doctors!: Doctor[];
  public displayedColumns: string[] = [ 'email', 'password', 'firstName', 'lastName', 'actions'];

  constructor(
    private doctorService: DoctorService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  private getDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openAddDoctorDialog(): void {
    const dialogRef = this.dialog.open(AddDoctorDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getDoctors();
    });
  }

  public openEditDoctorDialog(doctor: Doctor): void {
    const dialogRef = this.dialog.open(EditDoctorDialogComponent, {
      data: doctor
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDoctors();
    });
  }

  public deleteDoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor.id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDoctors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

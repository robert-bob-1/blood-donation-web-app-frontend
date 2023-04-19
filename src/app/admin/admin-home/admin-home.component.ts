import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '@app/_models/doctor';
import { DoctorService } from '@app/_services/users/doctor.service';
import { AddDoctorDialogComponent } from './add-doctor-dialog/add-doctor-dialog.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  public doctors!: Doctor[];
  public displayedColumns: string[] = [ 'email', 'password', 'firstName', 'lastName'];

  constructor(
    private doctorService: DoctorService,
    public addDoctorDialog: MatDialog
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
    const dialogRef = this.addDoctorDialog.open(AddDoctorDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getDoctors();
    });
  }
}

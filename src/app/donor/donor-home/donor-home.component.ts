import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '@app/_services/account.service';
import { LocationService } from '@app/_services/location.service';
import { DonorService } from '@app/_services/users/donor.service';
import { EditDonorDialogComponent } from './edit-donor-dialog/edit-donor-dialog.component';
import { Donor } from '@app/_models/donor';
import { MakeAppointmentDialogComponent } from './make-appointment-dialog/make-appointment-dialog.component';
import { Location } from '@app/_models/location';
import { Appointment } from '@app/_models/appointment';
import { AppointmentService } from '@app/_services/appointment.service';
@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.css']
})
export class DonorHomeComponent {// send donor as parameter to this component
  public donor!: Donor;

  public locations!: Location[];
  public displayedColumns: string[] = [ 'name', 'actions' ];

  public appointments: Appointment[] = [];
  public appointmentsDisplayedColumns: string[] = [ 'locationName', 'date', 'doctorName', 'actions' ];

  constructor(
    private locationService: LocationService,
    private donorService: DonorService,
    private accountService: AccountService,
    private appointmentService: AppointmentService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.donor = JSON.parse(localStorage.getItem('user')!);

    this.getLocations();
    this.getAppointments();
  }

  public deleteAccount(): void {
    this.donorService.deleteDonor(this.donor.id).subscribe(
      (response: void) => {
        console.log(response);
        this.accountService.logout();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openEditDonorDialog(): void {
    const dialogRef = this.dialog.open(EditDonorDialogComponent, {
      data: this.donor
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public onMakeAppointment(location: Location): void {
    const dialogRef = this.dialog.open(MakeAppointmentDialogComponent, {
      data: { 
        donor: this.donor,
        locations: this.locations,
        location: location
      },
      autoFocus: false
      });
      dialogRef.afterClosed().subscribe(result => {      });
  }

  public onDeleteAppointment(appointment: Appointment): void {
    if (new Date().getDate() <= new Date(appointment.date).getDate()) {
      this.appointmentService.deleteAppointment(appointment.id).subscribe(
        (response: any) => {
          console.log(response);
          this.getAppointments();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  private getLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (response: Location[]) => {
        this.locations = response;
        console.log(this.locations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getAppointments(): void {
    this.appointmentService.getAllAppointmentsOfDonor(this.donor.id).subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
        console.log(this.appointments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}

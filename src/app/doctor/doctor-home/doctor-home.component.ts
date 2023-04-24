import { Component } from '@angular/core';
import { LocationService } from '@app/_services/location.service';

import { Location } from '@app/_models/location';
import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from '@app/_models/doctor';
import { Appointment } from '@app/_models/appointment';
import { AppointmentService } from '@app/_services/appointment.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent {
  public doctor!: Doctor;

  public locations!: Location[];

  public appointments: Appointment[] = [];
  public appointmentsDisplayedColumns: string[] = [ 'locationName', 'date', 'doctorName', 'actions' ];

  public pageSize: number = 10;
  public currentPage: number = 0;
  public totalPages: number = 1;
  public totalElements: number = 0;
  constructor(
    private locationService: LocationService,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.doctor =  JSON.parse(localStorage.getItem('user')!);

    this.getLocations();
  }

  public getLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (response: Location[]) => {
        this.locations = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onConfirmAppointment(appointment: Appointment): void {
    appointment.doctor = this.doctor;
    this.appointmentService.confirmAppointment(appointment).subscribe(
      (response: Appointment) => {
        console.log(response);
        const index = this.appointments.findIndex((app) => app.id === response.id);
        this.appointments[index].doctor = response.doctor;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSelectLocation(location: Location): void {
    console.log(location);
    this.getAppointmentsAtLocation(location.id);
  }

  onShowTodayAppointments(event: Event): void {
    // this.appointmentService.getTodayAppointments(this.doctor.id).subscribe(
    //   (response: Appointment[]) => {
    //     this.appointments = response;
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }

  onShowAllAppointments(event: Event): void {
    this.getAppointments();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getAppointments();
  }

  private getAppointments(): void {
    this.appointmentService.getAppointments(this.currentPage, this.pageSize).subscribe(
      (response: any) => {
        this.appointments = response.content;
        this.totalElements = response.totalElements;
        console.log(this.appointments)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  private getAppointmentsAtLocation(locationId: string): void {
    this.appointmentService.getAppointmentsAtLocation(locationId).subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}

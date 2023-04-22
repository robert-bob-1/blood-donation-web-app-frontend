import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '@app/_models/appointment';
import { Donor } from '@app/_models/donor';
import { AppointmentService } from '@app/_services/appointment.service';
import { DonorService } from '@app/_services/users/donor.service';
import { Location } from '@app/_models/location';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.css']
})
export class MakeAppointmentDialogComponent {
  public locations: Location[] = [];
  public selectedLocationName!: string;

  //for datepicker
  public minDate!: Date;


  public form: FormGroup = new FormGroup({
    locationName: new FormControl( this.data.location.name, [Validators.required]),
    datePicker: new FormControl('', [Validators.required]),
  });

  constructor (
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
  }

  ngOnInit() {
    this.minDate = new Date();
    this.locations = this.data.locations;
    this.filterAvailableDates();
  }

  onMakeAppointment() {
    const appointment: Appointment = {
      uuid: '',
      donorId: this.data.donor.id,
      locationId: this.data.location.id,
      doctorId: '',
      date: this.form.value.datePicker,
      time: ''
    }

    this.appointmentService.createAppointment(appointment).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private filterAvailableDates() {
    
  }

}

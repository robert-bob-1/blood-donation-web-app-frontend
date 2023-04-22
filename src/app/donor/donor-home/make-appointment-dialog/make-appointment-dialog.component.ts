import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '@app/_models/appointment';
import { Donor } from '@app/_models/donor';
import { AppointmentService } from '@app/_services/appointment.service';
import { DonorService } from '@app/_services/users/donor.service';
import { Location } from '@app/_models/location';
@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.css']
})
export class MakeAppointmentDialogComponent {
  public locations: Location[] = [];
  public selectedLocationName!: string;

  public form: FormGroup = new FormGroup({
    locationName: new FormControl( this.data.location.name, [Validators.required]),
    datePicker: new FormControl('', [Validators.required]),
  });

  constructor (
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.locations = this.data.locations;
    
  }


}

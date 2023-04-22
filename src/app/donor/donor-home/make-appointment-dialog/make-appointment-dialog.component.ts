import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '@app/_models/appointment';
import { Donor } from '@app/_models/donor';
import { AppointmentService } from '@app/_services/appointment.service';
import { DonorService } from '@app/_services/users/donor.service';
import { Location } from '@app/_models/location';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.css']
})
export class MakeAppointmentDialogComponent {
  public locations: Location[] = [];
  public filteredLocations!: Location[];
  public selectedLocation!: Location;

  //for datepicker
  public minDate!: Date;


  public form: FormGroup = new FormGroup({
    locationName: new FormControl( this.data.location.name, [Validators.required, 
                                  this.locationValidator(this.locations.map(location => location.name))]),
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
    // this.filteredLocations = 
    this.form.controls['locationName'].valueChanges.subscribe(
      (value: string) => {
        this.filteredLocations = this.locations.filter(location => location.name.includes(value));
      }
    )

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

  locationValidator(locations: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const location = control.value;
      if (locations.indexOf(location) === -1) {
        return { 'invalidLocation': { location } };
      }
      return null;
    };
  }

  private filterAvailableDates() {
    
  }

}

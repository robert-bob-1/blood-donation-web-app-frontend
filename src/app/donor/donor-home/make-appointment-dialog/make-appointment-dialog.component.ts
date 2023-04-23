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
import { DatePipe } from '@angular/common';
import { LocationService } from '@app/_services/location.service';

@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.css']
})
export class MakeAppointmentDialogComponent {
  public locations: Location[] = [];
  public filteredLocations: Location[] = [];
  public selectedLocation!: Location;

  //for datepicker
  public minDate!: Date;
  public busyDates: Date[] = [];
  public busyDatesFilter!: (d: Date | null) => boolean;


  public form: FormGroup = new FormGroup({
    locationName: new FormControl( '', [Validators.required]),
    datePicker: new FormControl('', [Validators.required]),
  });

  constructor (
    private appointmentService: AppointmentService,
    private locationService: LocationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe
  ) { 
  }

  ngOnInit() {
    this.locations = this.data.locations;
    this.setLocationName();

    this.minDate = new Date();
    this.setInvalidDates();

    this.busyDatesFilter = (d: Date | null): boolean => {
      return !this.busyDates.find( busyDate => busyDate.toDateString() === d?.toDateString());
    }


    this.form.controls['locationName'].addValidators(this.locationValidator(this.locations.map( location => location.name)));
    this.form.controls['datePicker'].addValidators(this.dateValidator(this.busyDatesFilter));

    this.form.controls['locationName'].valueChanges.subscribe(
      (value: string) => {
        this.filteredLocations = this.locations.filter(location => location.name.includes(value));
      }
    )

    this.form.controls['datePicker'].statusChanges.subscribe(
      (status: string) => {
        console.log(status);
      }
    );
  }

  onMakeAppointment() {
    const date: string = this.datepipe.transform(this.form.value.datePicker, 'yyyy-MM-dd')!;

    const appointment: Appointment = {
      id: '',
      donor: this.data.donor,
      locationId: this.selectedLocation.id,
      doctorId: '',
      date: date,
      time: '00:00:00'
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

  onLocationBlur() {
    this.selectedLocation = this.locations.find(location => location.name === this.form.value.locationName)!;
    this.setInvalidDates();
  }

  locationValidator(locations: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      this.form.controls['datePicker'].updateValueAndValidity();
      
      const location = control.value;
      
      if (locations.indexOf(location) === -1) {
        return { 'invalidLocation': { location } };
      }
      return null;
    };
  }

  dateValidator(busyDatesFilter: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const date = control.value;

      if (!busyDatesFilter(date)) {
        return { 'invalidDate': { date } };
      }
      return null;
    };
  }

  private setLocationName() {
    if (this.data.location) {
      this.form.controls['locationName'].setValue(this.data.location.name);
      this.selectedLocation = this.data.location;
    }
  }

  private setInvalidDates() {
    if (this.selectedLocation) {
      this.locationService.getBusyDates(this.selectedLocation).subscribe(
        (response: any[][]) => {
          let aux = response.filter( dateCapacity => dateCapacity[1] <= 0)
          this.busyDates = aux.map( dateCapacity => new Date(dateCapacity[0]));
          console.log("location " + this.selectedLocation.name);
        });
    }
    
  }

}

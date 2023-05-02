import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '@app/_models/doctor';
import { Donor } from '@app/_models/donor';
import { DonorService } from '@app/_services/users/donor.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-donor-dialog',
  templateUrl: './edit-donor-dialog.component.html',
  styleUrls: ['./edit-donor-dialog.component.css']
})
export class EditDonorDialogComponent {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required]),
    smsNotification: new FormControl(false),
    emailNotification: new FormControl(false),
  });

  constructor (
    private donorService: DonorService,
    @Inject(MAT_DIALOG_DATA) public data: Donor
    ) { }

  ngOnInit() {
    this.populateForm(this.data);
  }

  public onUpdateDonor(): void {
    const updatedDonor: Donor = _.merge(this.data, this.form.value);
    updatedDonor.emailNotification = updatedDonor.emailNotification ? 1 : 0;
    updatedDonor.smsNotification = updatedDonor.smsNotification ? 1 : 0;

    this.donorService.updateDonor(updatedDonor).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
    localStorage.setItem('user', JSON.stringify(updatedDonor))
  }

  private populateForm(donor: Donor) {
    let editableDonor = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      bloodType: '',
      smsNotification: false,
      emailNotification: false,
    };
    editableDonor.email = donor.email;
    editableDonor.password = donor.password;
    editableDonor.firstName = donor.firstName;
    editableDonor.lastName = donor.lastName;
    editableDonor.bloodType = donor.bloodType;
    editableDonor.smsNotification = donor.smsNotification ? true : false;
    editableDonor.emailNotification = donor.emailNotification ? true : false;
    this.form.setValue(editableDonor);
  }

}

import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorService } from '@app/_services/users/doctor.service';
import * as _ from 'lodash';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Doctor } from '@app/_models/doctor';

@Component({
  selector: 'app-edit-doctor-dialog',
  templateUrl: './edit-doctor-dialog.component.html',
  styleUrls: ['./edit-doctor-dialog.component.css']
})
export class EditDoctorDialogComponent {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  constructor (
    private doctorService: DoctorService,
    @Inject(MAT_DIALOG_DATA) public data: Doctor
    ) { }

  ngOnInit() {
    this.populateForm(this.data);
  }

  public onEditDoctor(): void {
    const updatedDoctor = _.merge(this.data, this.form.value);

    this.doctorService.editDoctor(updatedDoctor).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  populateForm(doctor: any) {
    let editableDoctor = {
      email: doctor.email,
      password: doctor.password,
      firstName: doctor.firstName,
      lastName: doctor.lastName
    }
    this.form.setValue(editableDoctor);
  }
}

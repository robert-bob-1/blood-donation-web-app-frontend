import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DonorCreateDTO } from '@app/_models/donorCreateDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-'];
  public filteredBloodTypes: string[] = [];

  public form: FormGroup  = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required, this.bloodTypeValidator()]),
    smsNotification: new FormControl(false),
    emailNotification: new FormControl(false),
  });

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  get f() { return this.form.controls; }

  ngOnInit() {
    this.filteredBloodTypes = this.bloodTypes;
    this.form.controls['bloodType'].valueChanges.subscribe(
      (value: string) => {
        this.filteredBloodTypes = this.bloodTypes.filter( bloodType => bloodType.includes(value.toUpperCase()));
      }
    );
  }

  onRegister() {
    if (this.form.invalid) {
      return;
    }

    let donorDTO: DonorCreateDTO = {
      email: this.f['email'].value,
      password: this.f['password'].value,
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      bloodType: this.f['bloodType'].value,
      smsNotification: this.f['smsNotification'].value ? 1 : 0,
      emailNotification: this.f['emailNotification'].value ? 1 : 0,
    }

    this.accountService.register(donorDTO).subscribe( donor => {
      console.log(donorDTO);
      console.log(donor);
    });

    this.router.navigate(['/login']);
  }

  bloodTypeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!this.bloodTypes.includes(control.value))
        return { 'invalidBloodType': { location } };
      return null;
    };
  }
}

import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Donor } from '@app/_models/donor';
import { DonorCreateDTO } from '@app/_models/donorCreateDTO';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public form: FormGroup  = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    bloodType: new FormControl('', [Validators.required]),
  });

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  get f() { return this.form.controls; }

  onRegister() {
    if (this.form.invalid) {
      return;
    }

    let donorDTO: DonorCreateDTO = {
      email: this.f['email'].value,
      password: this.f['password'].value,
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      bloodType: this.f['bloodType'].value
    }

    this.accountService.register(donorDTO).subscribe( donor => {
      console.log(donor);
    });

    this.router.navigate(['/login']);
  }
}

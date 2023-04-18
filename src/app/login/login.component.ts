import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: FormGroup  = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });;

  constructor(
    private accountService: AccountService,
  ) { }

  get f() { return this.form.controls; }

  onClick() {
    if (this.form.invalid) {
      return; 
    }

    this.accountService.login(this.f['email'].value, this.f['password'].value);
    console.log(localStorage.getItem('user'));

    // this.accountService.login(this.f.email.value, this.f.password.value);
    
  }
}

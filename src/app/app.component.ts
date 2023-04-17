import { Component, OnInit } from '@angular/core';
import { Donor } from 'src/app/_models/donor';
import { DonorService } from './_services/users/donor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private donorService: DonorService,
              private accountService: AccountService) {}

}

// public ngOnInit() {
//   // this.loginUser('t', 't');
// }

// public loginUser(email: string, password: string): void {
  //   this.accountService.login(email, password).subscribe(
  //     (response: User) => {
  //       console.log(response);
  //       console.log(localStorage.getItem('user'));
  //     }, (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getDonorByEmail(email: string): void {

  //   this.donorService.getDonorByEmail(email).subscribe(
  //     (response: Donor) => {
  //       // this.currentDonor = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
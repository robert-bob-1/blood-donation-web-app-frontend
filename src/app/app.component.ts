import { Component, OnInit } from '@angular/core';
import { Donor } from 'src/app/entities/donor';
import { DonorService } from './services/donor/donor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public currentDonor: Donor = {
    uuid: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userType: '',
    bloodType: ''
  };

  constructor(private donorService: DonorService) {}

  public ngOnInit() {
    this.getDonorByEmail("t");
  }

  public getDonorByEmail(email: string): void {
    this.donorService.getDonorByEmail(email).subscribe(
      (response: Donor) => {
        this.currentDonor = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

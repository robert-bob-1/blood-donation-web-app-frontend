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
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorService } from './_services/users/donor.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountService } from './_services/account.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [DonorService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

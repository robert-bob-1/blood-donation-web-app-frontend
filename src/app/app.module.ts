import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorService } from './_services/users/donor.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountService } from './_services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [DonorService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

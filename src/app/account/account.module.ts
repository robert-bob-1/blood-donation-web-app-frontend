import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        RouterModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        LayoutComponent
    ]
})
export class AccountModule { }
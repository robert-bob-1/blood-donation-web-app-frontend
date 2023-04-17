import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountModule } from './account/account.module';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  // { path: 'account', component: AccountModule },
  { path: 'account', component: AccountModule },

  { path: '', redirectTo: '/account/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

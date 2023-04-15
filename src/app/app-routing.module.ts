import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },

  { path: '**', redirectTo: 'account' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

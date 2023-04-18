import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorHomeComponent } from './donor-home/donor-home.component';

const routes: Routes = [
    {
        path: '', component: DonorHomeComponent,
        children: [
            { path: '', component: DonorHomeComponent },
            // { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DonorRoutingModule { }
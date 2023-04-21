import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '@app/_services/account.service';
import { LocationService } from '@app/_services/location.service';
import { DonorService } from '@app/_services/users/donor.service';
import { EditDonorDialogComponent } from './edit-donor-dialog/edit-donor-dialog.component';
import { Donor } from '@app/_models/donor';

@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.css']
})
export class DonorHomeComponent {// send donor as parameter to this component
  public donor!: Donor;
  public locations!: Location[];
  public displayedColumns: string[] = [ 'name', 'actions' ];

  constructor(
    private locationService: LocationService,
    private donorService: DonorService,
    private accountService: AccountService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.donor = JSON.parse(localStorage.getItem('user')!);

    this.getLocations();
  }

  public deleteAccount(): void {
    this.donorService.deleteDonor(this.donor.uuid).subscribe(
      (response: void) => {
        console.log(response);
        this.accountService.logout();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openEditDonorDialog(): void {
    const dialogRef = this.dialog.open(EditDonorDialogComponent, {
      data: this.donor
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private getLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (response: Location[]) => {
        this.locations = response;
        console.log(this.locations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  


}

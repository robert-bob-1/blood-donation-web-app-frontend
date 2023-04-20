import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationService } from '@app/_services/location.service';
import { DonorService } from '@app/_services/users/donor.service';

@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.css']
})
export class DonorHomeComponent {// send donor as parameter to this component
  public locations!: Location[];
  public displayedColumns: string[] = [ 'name' ];

  constructor(
    private locationService: LocationService,
    private donorService: DonorService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  public deleteAccount(): void {
    // this.donorService.deleteDonor(this.donor.uuid).subscribe(
    //   (response: void) => {
    //     console.log(response);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }

  public openEditDonorDialog(): void {

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

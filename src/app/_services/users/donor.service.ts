import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from 'src/app/_models/donor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDonorByEmail(email: string): Observable<Donor> {
    return this.http.get<Donor>(`${this.apiServerUrl}/donor/${email}`);
  }
 
  public registerDonor(donor: Donor): Observable<Donor> {
    return this.http.post<Donor>(`${this.apiServerUrl}/donor/register`, donor);
  }

  public updateDonor(donor: Donor): Observable<Donor> {
    return this.http.put<Donor>(`${this.apiServerUrl}/donor/register`, donor);
  }

  public deleteDonor(uuid: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/donor/delete/${uuid}`);
  }
}

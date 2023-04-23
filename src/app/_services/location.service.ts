import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Location } from '@app/_models/location';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/location`);
  }

  public getBusyDates(location: Location): Observable<any[][]> {
    return this.http.post<any[][]>(`${this.apiServerUrl}/location/busy-dates`, location);
  }
}

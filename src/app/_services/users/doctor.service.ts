import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '@app/_models/doctor';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDoctorByEmail(email: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiServerUrl}/doctor/${email}`);
  }
}

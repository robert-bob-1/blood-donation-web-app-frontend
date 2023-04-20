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

  public getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctor/all`);
  }

  public registerDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/doctor/register`, doctor);
  }

  public updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiServerUrl}/doctor/edit`, doctor);
  }

  public deleteDoctor(doctorId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/doctor/delete/${doctorId}`);
  }
}

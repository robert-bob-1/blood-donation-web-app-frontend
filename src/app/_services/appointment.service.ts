import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '@app/_models/appointment';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiServerUrl}/appointment`, appointment);
  }

  public getAllAppointmentsOfDonor(donorId: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/appointment/${donorId}`);
  }

  public getAppointmentsAtLocation(locationId: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/appointment/location/${locationId}`);
  }

  public deleteAppointment(appointmentId: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/appointment/${appointmentId}`);
  }

  public confirmAppointment(appointment: Appointment): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/appointment`, appointment, {responseType: 'text'});
  }

  public getAppointments(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/appointment/paginated`, {
      params: new HttpParams()
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())});
  }

  public getTodayAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/appointment/today`);
  }
}

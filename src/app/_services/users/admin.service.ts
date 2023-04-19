import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '@app/_models/admin';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAdminByEmail(email: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiServerUrl}/admin/${email}`);
  }
}

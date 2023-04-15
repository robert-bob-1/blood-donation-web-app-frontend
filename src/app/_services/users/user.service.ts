import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/${email}/${password}`);
  }
  
  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/${email}`);
  }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/register`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/register`, user);
  }
}

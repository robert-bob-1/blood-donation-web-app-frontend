import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Donor } from '../_models/donor';
import { User } from '../_models/user';
import { environment } from '@environments/environment';
import { UserService } from './users/user.service';
import { DonorService } from './users/donor.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
    // private userSubject: BehaviorSubject<User | null>;
    // public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private donorService: DonorService
    ) {
        // this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        // this.user = this.userSubject.asObservable();
    }

    // public get userValue() {
    //     return this.userSubject.value;
    // }

    login(email: string, password: string): Observable<User> {
        const user = this.userService.getUserByEmailAndPassword(email, password);
        user.subscribe((user) => {
            if (user.userType === 'donor') {
                this.donorService.getDonorByEmail(email).subscribe((donor) => {
                    localStorage.setItem('user', JSON.stringify(donor));
                });
                console.log(localStorage.getItem('user'));
            }
        });
        return user;
        // return this.http.get<User>(`${environment.apiBaseUrl}/user/${email}/${password}`)
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('user', JSON.stringify(user));
        //         if(user.userType === 'donor') {
                    
        //         return user;
        //     }));
    }

    // logout() {
    //     // remove user from local storage and set current user to null
    //     localStorage.removeItem('user');
    //     this.userSubject.next(null);
    //     this.router.navigate(['/account/login']);
    // }

    // register(user: User) {
    //     return this.http.post(`${environment.apiUrl}/users/register`, user);
    // }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }

    // getById(id: string) {
    //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    // }

    // update(id: string, params: any) {
    //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id == this.userValue?.id) {
    //                 // update local storage
    //                 const user = { ...this.userValue, ...params };
    //                 localStorage.setItem('user', JSON.stringify(user));

    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
    // }

    // delete(id: string) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue?.id) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Donor } from '../_models/donor';
import { User } from '../_models/user';
import { environment } from '@environments/environment';
import { UserService } from './users/user.service';
import { DonorService } from './users/donor.service';
import { DonorCreateDTO } from '@app/_models/donorCreateDTO';
import { AdminService } from './users/admin.service';
import { DoctorService } from './users/doctor.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
    // private userSubject: BehaviorSubject<User | null>;
    public user: any;
    public isUserAuthenticated: boolean = false;
    private authStatusListener = new Subject<boolean>();

    constructor(
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private donorService: DonorService,
        private adminService: AdminService,
        private doctorService: DoctorService
    ) {}

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }


    login(email: string, password: string): Observable<User> {
        const user = this.userService.getUserByEmailAndPassword(email, password);
        user.subscribe((user) => {
            this.isUserAuthenticated = true;
            if (user.userType === 'donor') {
                this.donorService.getDonorByEmail(email).subscribe((donor) => {
                    localStorage.setItem('user', JSON.stringify(donor));
                    console.log(donor);
                    console.log(localStorage.getItem('user'));
                    this.router.navigate(['/donor']);
                });
            }
            else if (user.userType === 'admin') {
                this.adminService.getAdminByEmail(email).subscribe((admin) => {
                    localStorage.setItem('user', JSON.stringify(admin));
                    this.router.navigate(['/admin']);
                });
            }
            else if (user.userType === 'doctor') {
                this.doctorService.getDoctorByEmail(email).subscribe((doctor) => {
                    localStorage.setItem('user', JSON.stringify(doctor));
                    this.router.navigate(['/doctor']);
                });
            }
        });

        user.subscribe( (user) => {
            this.authStatusListener.next(true);
        });
        return user;
    }

    register (donorDTO: DonorCreateDTO): Observable<Donor> {
        return this.donorService.registerDonor(donorDTO);
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

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
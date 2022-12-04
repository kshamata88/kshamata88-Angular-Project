import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn$ = new BehaviorSubject<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/users`, {...user});
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`http://localhost:3000/users/login`, {
      email, password
    }).pipe(
      tap(response => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', response.token);
        this.isLoggedIn$.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
    this.router.navigate(['/users/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

constructor(
  private fb: FormBuilder,
  private userService: UserService,
  private _snackBar: MatSnackBar,
  private router: Router
) {
  this.userService.isLoggedIn$
      .pipe(first())
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/products']);
        }
      });
    }

ngOnInit(): void {
}

login(): void {
  this.userService.login(this.loginForm.value.email as string,
    this.loginForm.value.password as string)
    .subscribe({
      next: user => {
        this._snackBar.open('User login successful!', undefined, { duration: 2000 });
        this.router.navigate(['/products']);
      },
      error: err => {
        this._snackBar.open(err.error.error.message, undefined, { duration: 2000 });
      }
    });
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../model/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
  register(): void {
    this.userService.register(this.registerForm.value as User)
      .subscribe({
        next: user => {
          this._snackBar.open('User registered successfully!', undefined, { duration: 2000 });
          this.router.navigate(['/users/login']);
        },
        error: err => {
          this._snackBar.open(err.error.error.message, undefined, { duration: 2000 });
        }
      });
  }

}

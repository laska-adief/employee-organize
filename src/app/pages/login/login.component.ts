import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService, UserLogin } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  loginForm!: FormGroup;
  isErrorLogin: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialLoginForm();
  }

  initialLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage(field: string) {
    let errorMessage = 'You must enter a value';
    switch (field) {
      case 'email':
        if (this.loginForm.get('email')?.hasError('email')) {
          errorMessage = 'Not a valid email';
        }
        break;

      default:
        errorMessage = 'You must enter a value';
        break;
    }
    return errorMessage;
  }

  login() {
    const loginEmail = this.loginForm.get('email')?.value;
    const loginPassword = this.loginForm.get('password')?.value;
    if (
      this.loginForm.valid &&
      loginEmail === 'admin@gmail.com' &&
      loginPassword === 'admin'
    ) {
      const loginUser: UserLogin = {
        email: loginEmail,
        password: loginPassword,
      };
      this.authService.login(loginUser);
      this.isErrorLogin = false;
      this.router.navigate(['employee']);
    } else {
      this.isErrorLogin = true;
    }
  }
}

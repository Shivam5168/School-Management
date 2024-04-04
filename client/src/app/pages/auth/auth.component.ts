import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponse } from './model/userLoginModel';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  userLoginForm: FormGroup;
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toast : ToastrService
  ) {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  loginUser() {
    debugger;
    if (this.userLoginForm.valid) {
      this.service.loginUser(this.userLoginForm.value).subscribe({
        next: (Response : AuthResponse) => {
          if(Response.success === true){
          localStorage.setItem("token", Response.token);
          this.router.navigate(['dashboard']);
          this.toast.success('You are Successfully Login');
          }
        },
        error: (error) => {},
      });
    }
  }
}

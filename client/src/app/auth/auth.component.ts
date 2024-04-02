import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  userLoginForm : FormGroup;
  constructor(private service : AuthService, private fb : FormBuilder){
    this.userLoginForm = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  loginUserData(){
    this.service.loginUser(this.userLoginForm.value).subscribe({next : (Response) => {
      console.log(Response)
    }, error : (error) => {}})
  }
}

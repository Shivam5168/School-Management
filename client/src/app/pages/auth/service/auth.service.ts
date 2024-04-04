import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthResponse, userLogin } from '../model/userLoginModel';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private URL = environment.endpoint;

  constructor(private http : HttpClient) { }

  loginUser(data : userLogin){
    return this.http.post<AuthResponse>(`${this.URL}login`, data);
  }

}

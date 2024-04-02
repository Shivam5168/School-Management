import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { userLogin } from '../model/userLoginModel';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private URL = environment.endpoint;

  constructor(private http : HttpClient) { }

  loginUser(data : userLogin){
    return this.http.post(`${this.URL}`, data);
  }

}

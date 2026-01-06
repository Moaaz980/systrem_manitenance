import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../models/LoginResponse';
import { Observable } from 'rxjs';
import { LoginPayload } from '../../models/Credenziali';

@Injectable({
  providedIn: 'root' ,
})
export class LoginServiceService {
  constructor(private httpClient:HttpClient) {}
  fetchData(payload:LoginPayload):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/users/login' , payload);
  }
}

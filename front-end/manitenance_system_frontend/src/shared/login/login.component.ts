import { Component , inject , Input } from '@angular/core';
import { LogoApp } from '../../core/logo-app.service';
import { AuthformComponent } from '../authform/authform.component';
import { LoginServiceService } from './login-service.service';
import { LoginPayload } from '../../models/Credenziali';

@Component({
  selector: 'app-login',
  standalone: true ,
  imports: [AuthformComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logo = inject(LogoApp);
  tipoForm:string = 'Login';
  constructor(private servizioLogin: LoginServiceService) {}
  res:string = '';

  login(dati: LoginPayload) {
    this.servizioLogin.fetchData(dati).subscribe({
      next: data => this.res = data.message ,
      error: err => this.res = err ,
    });
  }
}

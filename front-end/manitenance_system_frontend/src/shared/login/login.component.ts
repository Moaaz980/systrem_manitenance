import { Component , inject , Input } from '@angular/core';
import { LogoApp } from '../../core/logo-app.service';
import { AuthformComponent } from '../authform/authform.component';

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
}

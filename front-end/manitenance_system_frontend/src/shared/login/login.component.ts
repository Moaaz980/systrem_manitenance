import { Component , inject } from '@angular/core';
import { LogoApp } from '../../core/logo-app.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logo = inject(LogoApp);
}

import { Component , inject } from '@angular/core';
import { LogoApp } from '../../core/logo-app.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  titolo = inject(LogoApp);
}

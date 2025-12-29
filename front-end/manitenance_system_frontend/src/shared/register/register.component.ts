import { Component , inject , Input } from '@angular/core';
import { LogoApp } from '../../core/logo-app.service';
import { AuthformComponent } from '../authform/authform.component';

@Component({
  selector: 'app-register',
  imports: [AuthformComponent],
  standalone: true ,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  titolo = inject(LogoApp);
  tipoForm:string = 'Register';
}

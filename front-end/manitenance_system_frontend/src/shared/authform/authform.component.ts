import { Component , Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authform',
  standalone: true ,
  imports: [MatInputModule , MatFormFieldModule],
  templateUrl: './authform.component.html',
  styleUrl: './authform.component.css'
})
export class AuthformComponent {
  @Input() typeForm:string = '';
  constructor(private router:Router) {}

  goToHome():void {
    this.router.navigate(['/home']);
  }
}

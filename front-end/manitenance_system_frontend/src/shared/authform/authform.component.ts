import { Component , Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-authform',
  standalone: true ,
  imports: [MatInputModule , MatFormFieldModule , FormsModule , CommonModule],
  templateUrl: './authform.component.html',
  styleUrl: './authform.component.css'
})
export class AuthformComponent {
  @Input() typeForm:string = '';
  constructor(private router:Router) {}

  goToHome():void {
    this.router.navigate(['/home']);
  }


  username:string = '';
  password:string = '';
  role:string = '';
  globalError:string = '';


  onSubmit(form:NgForm) {
    if (!form.valid) {
      this.globalError = 'Compila tutti i campi';
      setTimeout(() => {
          this.globalError = '';
      }, 2000);
  }
}
}

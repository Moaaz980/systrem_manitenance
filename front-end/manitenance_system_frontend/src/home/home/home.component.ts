import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titolo:string = 'Manitenance system';
  descrizione:string = 'Trackit is a system to manage and monitor maintenance requests in a condominium or company. It allows users to report issues, administrators to assign them to technicians, and technicians to manage interventions until they are resolved. The system ensures traceability, organization, and up-to-date request statuses.';
  logo:string = 'Trackit';

  constructor(public router:Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}

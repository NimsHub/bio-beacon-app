import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  formStatus: boolean = true;

  toggleForm() {
    this.formStatus = !this.formStatus
    console.log(this.formStatus)
  }
}

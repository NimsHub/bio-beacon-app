import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();
  showPassword: boolean = false;
  password = new FormControl('', Validators.required)
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', Validators.required)
  lastName = new FormControl('', Validators.required)
  mobile = new FormControl('', Validators.required)
  address = new FormControl('', Validators.required)
  dateOdBirth = new FormControl('', Validators.required)
  startDate = new Date(1990, 0, 1);
  labelPosition: 'male' | 'female' = 'female';
  role = new FormControl<boolean>(true);

  toggle() {
    this.toggleEvent.emit()
  }
}

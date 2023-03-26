import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();
  password = new FormControl('', Validators.required)
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  showPassword: boolean = false;
  invalid: boolean = this.userEmail.hasError('email') && !this.userEmail.hasError('required');

  toggle() {
    this.toggleEvent.emit()
  }
}

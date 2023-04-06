import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contat-us',
  templateUrl: './contat-us.component.html',
  styleUrls: ['./contat-us.component.css'],
})
export class ContatUsComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);
  mobile = new FormControl('', Validators.required);
  role = new FormControl<boolean>(true);

  toggle() {
    this.toggleEvent.emit();
  }
}

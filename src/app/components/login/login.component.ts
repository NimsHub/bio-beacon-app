import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();
  form: FormGroup;
  showPassword: boolean = false;
  errorMessage: string | undefined;

  constructor(private authService: AuthService,private router: Router) {
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  toggle() {
    this.toggleEvent.emit()
  }

  onSubmit() {
    if (this.form.valid) {
      this.login()
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get invalid() {
    // @ts-ignore
    return this.email.hasError('email') && !this.email.hasError('required');
  }

  login(): void {
    const credentials = {
      email: this.email?.value,
      password: this.password?.value
    };
    this.authService.login(credentials).subscribe({error: (e) => this.errorMessage = e.error.message})
    this.router.navigate(['/dashboard'])
  };
}

// response => {
//   console.log(response)
// },
// error => {
//   this.errorMessage=error.error.message;
//   console.log(error.error.message)
// }

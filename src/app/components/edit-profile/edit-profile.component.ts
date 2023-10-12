import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    
    this.editForm.setValidators(this.passwordMatchValidator);
  }

  
  passwordMatchValidator: ValidatorFn = (form: AbstractControl) => {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };

  confirmPasswordHasError(errorName: string) {
    const control = this.editForm.get('confirmPassword');
    return control?.touched && control?.hasError(errorName);
  }

  saveProfile() {
    if (this.editForm.valid) {
      //Edit-profile code should be added here
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  signupForm: FormGroup;
  loginForm: FormGroup;

  //Switches between Login mode and Signup mode
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      signupData: new FormGroup({
        first_name: new FormControl(null, Validators.required),
        last_name: new FormControl(null, Validators.required),
        company_name: new FormControl(null),
        new_email: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
        new_password: new FormControl(null, Validators.required),
      }),
    });

    this.loginForm = new FormGroup({
      loginData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      }),
    });
  }

  onSignUpSubmit() {
    console.log(this.signupForm);
  }

  onLoginSubmit() {
    console.log(this.loginForm);
  }
}

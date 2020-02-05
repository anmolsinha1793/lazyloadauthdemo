import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatePassword } from '../validators/password.validator';
import { SignupService } from '../services/signup.service';
import { ValidateEmailNotTaken } from '../validators/async-email.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //registerUser = {};
  registerUser: FormGroup;
  constructor(private _auth: AuthService, private router: Router,private formBuilder: FormBuilder, private signupService: SignupService) {
   }

  ngOnInit() {
    this.registerUser  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,ValidatePassword],ValidateEmailNotTaken.createValidator(this.signupService)]
  });
  }
  onRegister() {
    this._auth.registerUser(this.registerUser.value)
      .subscribe(
        res =>  {
          console.log(res);
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['/customers']);
        },
        err => console.log(err)
        );
  }
}

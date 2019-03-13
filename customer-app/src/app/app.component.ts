import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  form: FormGroup;
  constructor(private _authService: AuthService, public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      username: '',
      password: '',
      confirm: '',
      newsletter: ''
    });
  }
  onRegister() {
    console.log('done');
  }
}

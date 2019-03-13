import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUser = {};
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onRegister() {
    this._auth.registerUser(this.registerUser)
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

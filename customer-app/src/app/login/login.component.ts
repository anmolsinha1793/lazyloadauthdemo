import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['/customers']);
        },
        err => console.log(err)
      );
  }

}

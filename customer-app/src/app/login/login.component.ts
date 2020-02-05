import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthService, private router: Router,private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private closeSub: Subscription;
  private changeSub: Subscription;
  public login:string='Login';

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
  createComponent() {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = 'test';
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
    this.changeSub = componentRef.instance.change.subscribe(()=>{
      this.login = 'LoginChanged';
      this.changeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap  } from 'rxjs/operators';
import { timer, Observable } from 'rxjs';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email: string) {
    // return this.http
    //   .get('assets/users.json')
    //   .pipe(
    //     map(users => console.log(users))
    //   )
    
  }
}
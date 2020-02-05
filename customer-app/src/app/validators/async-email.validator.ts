import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { timer, Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { map, of } from 'core-js/library/core/array';
import { HttpClient } from '@angular/common/http';


export class ValidateEmailNotTaken {
    static createValidator(signupService: SignupService) {
    //   return (control: AbstractControl) => {
    //     return signupService.checkEmailNotTaken(control.value)
    //     .pipe(
    //         map(res => {
    //       return res ? null : { emailTaken: true };
    //     })
    //     );
    //   };
    }
  }
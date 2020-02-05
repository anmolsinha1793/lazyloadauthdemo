import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { timer, Observable } from 'rxjs';
import { map, switchMap, filter  } from 'rxjs/operators';



export class ValidateEmailNotTaken {
    static createValidator(signupService: SignupService) {
      return (control: AbstractControl) => {
        return signupService.checkEmailNotTaken(control.value)
            .pipe(
                map((res) => {
                    return res ? null : { emailTaken: true };
                  })
        )
   
      };
    }
  }
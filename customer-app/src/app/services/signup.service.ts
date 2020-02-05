import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/data/users.json')
      .pipe(
          map((res:any) => res.filter(user => user.email === email)),
          map(users => !users.length)
      )
    
  }
}
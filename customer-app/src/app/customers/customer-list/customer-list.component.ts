import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers = [];
  public newcustomers = [];
  // public custpromise = [];
  public name = 'anmol';
  constructor(private _customerService: CustomerService, private _route: Router) { }

  ngOnInit() {
  this._customerService.getCustomers()
        .subscribe((data) => {
          this.customers = data;
        });
  this._customerService.getnewCustomers()
        .subscribe((data) => {
          this.newcustomers = data;
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._route.navigate(['/login']);
            }
          }
        });
  //  this._customerService.getCustomersPromise().then((data) => {
  //   if (data) {
  //    this.custpromise = data;
  //   }
  //  });
  }

}

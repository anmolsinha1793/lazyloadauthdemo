import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from 'src/app/interfaces/customer';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url = '/assets/data/customers.json';
  private _customersUrl = 'http://localhost:3000/api/customers';
  private _ordersUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this._url);
  }
  getnewCustomers() {
    return this.http.get<any>(this._customersUrl);
  }
  getOrders() {
    return this.http.get<any>(this._ordersUrl);
  }
  // getCustomersPromise(): Promise<ICustomer[]> {
  //   return this.http.get(this._url)
  //   .map((response: Response) => <ICustomer>response.json())
  //   .toPromise()
  //   .catch();
  // }
}

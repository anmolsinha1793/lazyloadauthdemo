import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders = [];
  message = '';
  List = ['apple', 'banana', 'grapes'];
  constructor(private _custService: CustomerService) { }

  ngOnInit() {
    this._custService.getOrders()
      .subscribe(
        (data) => {this.orders = data; },
        (err) => {console.log(err); }
      );
      this.message = this.List[Math.floor(Math.random() * this.List.length)];
  }

}

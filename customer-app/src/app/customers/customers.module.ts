import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerDataComponent } from './customer-data/customer-data.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerDataComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [CustomerService]
})
export class CustomersModule { }

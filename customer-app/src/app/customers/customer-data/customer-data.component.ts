import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {
  @Input() customername;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireevent() {
    this.childEvent.emit('testingdata');
  }

}

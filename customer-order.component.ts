import { Component, OnInit } from '@angular/core';
import { Orderdetails } from 'src/Models/OrderDetails';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  odetails:Orderdetails=new Orderdetails;

  constructor() { }

  ngOnInit(): void {
    this.odetails=
    {orderid:1,
      prodid:2,
    price:200,
  quantity:5}
  }
  Save($event:any)
  {
  console.log(this.odetails);
  }

}

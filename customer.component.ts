import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/Models/CustomerModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
cid:number=0;
cname:string='';
ccity:string='';

customer:CustomerModel[]=[
  new CustomerModel(1,'Aarav','bangalore'),
  new CustomerModel(2,'Sahana','Mysore'),
  new CustomerModel(3,'Zeeshan','Varanasi')
]
myredborderclass="redborder";
mygreenborderclass="greenborder";

Save($event:any)
{
console.log(this.cid);
console.log(this.cname)
console.log(this.ccity);

let p=new CustomerModel(this.cid,this.cname,this.ccity);
}
  constructor() { }

  ngOnInit(): void {
  }

}

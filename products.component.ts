import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/Models/ProductsModel';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Pid:number=0;
Pname:string='';
Pprice:number=0;
quantity:number=3;
pageTitle="Products Details";

nos:number[]=[1,2,3,4,5];
plist:ProductsModel[]=[
  new ProductsModel(1,'Books',500),
  new ProductsModel(2,'Pen',50)
];
products=[ {"id":1,"name":"laptops",price:60000}, 
{"id":2,"name":"mobile covers",price:600}, 
{"id":3,"name":"mobiles",price:60000}, 
{"id":4,"name":"harddisk",price:60000}, ]

myredclass="red";
myblueclass="blue";
myredborderclass="redborder"
Applycss=false;
myparacolour="brown"

displayProductList():void{}

Save($event:any)
{
console.log(this.Pid);
console.log(this.Pname)
console.log(this.Pprice);
console.log(this.quantity);
let p=new ProductsModel(this.Pid,this.Pname,this.Pprice);
}
  constructor() { }

  ngOnInit(): void {
    this.displayProductList();
  }

}

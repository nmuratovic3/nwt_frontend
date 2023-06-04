import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  shoeList: any;
  constructor(private httpClient: HttpClient){
    this.shoeList=[];
  }
 ngOnInit(): void{
  this.getProductList()
 }
 getProductList(){
  this.httpClient.get('').subscribe((result: any)=>{
  this.shoeList=result //Staviti API
})
 }
}

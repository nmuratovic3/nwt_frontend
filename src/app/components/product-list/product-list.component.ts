import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  shoeList!: Product[];

  constructor(private productService: ProductService){
   
  }
 ngOnInit(): void{
  this.productService.getProductList().subscribe((data)=>{
    this.shoeList=data
  })
 }

}

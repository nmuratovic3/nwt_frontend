import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productService';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor (private productService: ProductService){}

  ngOnInit():void{


  }

}

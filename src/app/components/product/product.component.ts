import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/models/product';
import { ModalComponent } from '../modal/modal.component';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  product:Product | null;
  userRole:string | null;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService:CartService) {}

  ngOnInit() {
    this.userRole=localStorage.getItem('role')
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(data=>{
        this.product=data;
        console.log(data)
        console.log(this.product)
      })
    });
  }
  addToCart(){
    let cartId=""
    this.cartService.getCartInfo().subscribe(data=>{
      cartId=data.id;
    })
    this.cartService.addToCart(this.productId,cartId).subscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductForCart } from 'src/app/models/productForCart';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[]=[]
  totalPrice:number=0
  productInCart:ProductForCart

  constructor(private cartService: CartService, private productService:ProductService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data: any)=> {
      this.productInCart=data
      if(data===undefined) this.productsInCart=[]
      data.forEach((element: { productId: string; }) => {
        this.productService.getProductById(element?.productId).subscribe(product=>{
          this.productsInCart.push(product)
          this.totalPrice+=product.price
        })
      });
    })
  }
  test(){
    console.log(this.productsInCart)
  }
  removeFromCart(){
    this.cartService.getCart().subscribe((data: any)=> {
      this.productInCart=data
    this.cartService.removeFromCart(data[0].id).subscribe();
    })
    
  }

}

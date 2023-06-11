import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  curentUser: User;
  productsInCart: Product[]=[]
  totalPrice:number=0
  cart: Cart

  constructor(private userService: userService, private cartService: CartService, private productService:ProductService){}
  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(result => {
      this.curentUser = result
    })
    this.cartService.getCart().subscribe((data: any)=> {
      console.log(data)
      if(data===undefined) this.productsInCart=[]
      data.forEach((element: { productId: string; }) => {
        this.productService.getProductById(element?.productId).subscribe(product=>{
          this.productsInCart.push(product)
          this.totalPrice+=product.price
        })
      });
    })
    this.cartService.getCartInfo().subscribe(data=>{
      this.cart=data
      console.log(this.cart.id)
    })
  }
  finishOrder(){
    this.cartService.finishOrder(this.curentUser.id,this.curentUser.address,this.cart.id).subscribe(
      response=>{
        console.log(response)
      }
    )
  }
}

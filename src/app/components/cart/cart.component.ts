import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductForCart } from 'src/app/models/productForCart';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';
import { Location } from '@angular/common';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[] = []
  totalPrice: number = 0
  productInCart: ProductForCart
  empty: boolean = true

  constructor(private cartService: CartService, private productService: ProductService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data: any) => {
      this.productInCart = data
      if (data === undefined) {
        this.productsInCart = []
        this.empty = true
      } else if (this.productsInCart.length === 0) {
        this.empty = true
      }
      data.forEach((element: { productId: string; }) => {
        this.productService.getProductById(element?.productId).subscribe(product => {
          this.productsInCart.push(product)
          this.totalPrice += product.price
          this.empty = false
        })
      });
    })
  }
  test() {
    console.log(this.productsInCart)
  }
  removeFromCart() {
    this.cartService.getCart().subscribe((data: any) => {
      this.productInCart = data
      this.cartService.removeFromCart(data[0].id).subscribe();
      setTimeout(() => {
        window.location.reload()
      }, 100);
    })

  }

}

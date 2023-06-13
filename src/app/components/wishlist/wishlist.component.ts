import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductForCart } from 'src/app/models/productForCart';
import { ProductService } from 'src/app/services/ProductService';
import { WishlistService } from 'src/app/services/WishlistService';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  productsInWishlist: Product[]=[]
  totalPrice:number=0
  productInCart:ProductForCart
  constructor(private wishlistService: WishlistService, private productService:ProductService){}
  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((data: any)=> {
      this.productInCart=data
      if(data===undefined) this.productsInWishlist=[]
      data.forEach((element: { productId: string; }) => {
        this.productService.getProductById(element?.productId).subscribe(product=>{
          this.productsInWishlist.push(product)
          this.totalPrice+=product.price
        })
      });
    })
  }
  test(){
    console.log(this.productsInWishlist)
  }
  removeFromWishlist(){
    this.wishlistService.getWishlist().subscribe((data: any)=> {
      this.productInCart=data
    this.wishlistService.removeFromWishlist(data[0].id).subscribe();
    setTimeout(() => {
      window.location.reload()
    }, 100); 
    })
    
  }

}

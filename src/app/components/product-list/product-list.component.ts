import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  shoeList: Product[]=[];
  lista: Product[]

  constructor(private productService: ProductService, private router: Router, private cartService:CartService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    let route = this.router.url;
    this.route.params.subscribe(params => {
      const searchValue = params['search'];
      console.log(searchValue)
    });    this.productService.getProductList().subscribe((data) => {
        console.log(data)
        if (route === '/products') {
          this.shoeList = data
        } else if (route === '/products/kids') {
         data.forEach(shoes => {
          console.log('tu')
            if (shoes.spol === 'kids') {
              this.shoeList.push(shoes)
            }
          })
        } else if (route === '/products/male') {
          data.forEach(shoes => {
            if (shoes.spol === 'male') {
              this.shoeList.push(shoes)
            }
          })
        } else if (route === '/products/female') {
         data.forEach(shoes => {
            if (shoes.spol === 'female') {
              this.shoeList.push(shoes)
            }
          })
        }
    })
    console.log(this.shoeList)
  }
  async addToCart(productId:number){
    let cartId=""
    await this.cartService.getCartInfo().subscribe(data=>{
      cartId=data.id;
    })
    this.cartService.addToCart(productId.toString(),cartId).subscribe()
  }

}

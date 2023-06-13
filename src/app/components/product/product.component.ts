import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/models/product';
import { ModalComponent } from '../modal/modal.component';
import { CartService } from 'src/app/services/CartService';
import { WishlistService } from 'src/app/services/WishlistService';
import { ReservationService } from 'src/app/services/ReservationService';
import { userService } from '../services/userService';
import { User } from 'src/app/models/user';

declare var window: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  user:User
  product: Product | null;
  userRole: string | null;
  formModal: any


  constructor(private route: ActivatedRoute, private productService: ProductService, 
    private cartService: CartService, private wishlistService: WishlistService, 
    private reservationService:ReservationService,private  userService: userService) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('role')
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(data => {
        this.product = data;
      })
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("staticBackdrop")
    )
    console.log(this.formModal)
  }
  addToCart() {
    let cartId = ""
    this.cartService.getCartInfo().subscribe(data => {
      cartId = data.id;
    })
    this.cartService.addToCart(this.productId, cartId).subscribe()
  }
  openModal() {
    console.log(document.getElementById("staticBackdrop"))
   this.formModal?.show();
  }
  doSomething() {
    this.formModal.hide()
  }
  addToWishlist(){
    let wishlistId = ""
    this.wishlistService.getWishlisttInfo().subscribe(data => {
      wishlistId = data.id;
    })
    this.wishlistService.addToWishlist(this.productId, wishlistId).subscribe()
  }

  makeReservation(){
    this.userService.getCurrentUser().subscribe(data=>{
      this.user=data
    })
    this.reservationService.addToReservation(this.productId, this.user?.id).subscribe()
  }
}

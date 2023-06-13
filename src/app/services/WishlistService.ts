import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
@Injectable({
  providedIn: 'root'
})

export class WishlistService {
  constructor(private httpClient: HttpClient) {

  }
  getWishlist(): any {
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/wishlist/wishlist-products/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  getWishlisttInfo(){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/wishlist/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  addToWishlist(productId:string,cartId:string){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')

    let productForWishlist={
      productId:productId,
      quantit: 1
    }
    return this.httpClient.post('http://localhost:8080/user/wishlist/'+email, productForWishlist, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  removeFromWishlist(id:Number){
    let token = localStorage.getItem('token');
    return this.httpClient.delete('http://localhost:8080/user/wishlist/wishlist-product/'+id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
}
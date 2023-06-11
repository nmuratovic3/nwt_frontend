import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
@Injectable({
  providedIn: 'root'
})

export class CartService {
  constructor(private httpClient: HttpClient) {

  }
  getCart(): any {
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/cart/cart-products/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  getCartInfo(){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/cart/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  addToCart(productId:string,cartId:string){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')

    let productForCart={
      productId:productId,
      quantit:1
    }
    return this.httpClient.post('http://localhost:8080/user/cart/'+email, productForCart, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  removeFromCart(id:string){
    let token = localStorage.getItem('token');
    return this.httpClient.delete('http://localhost:8080/user/cart/cart-products/'+id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
}
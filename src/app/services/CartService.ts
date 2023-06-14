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
      quantit:"1"
    }
    return this.httpClient.post('http://localhost:8080/user/cart/'+email, productForCart, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  removeFromCart(id:Number){
    let token = localStorage.getItem('token');
    return this.httpClient.delete('http://localhost:8080/user/cart/cart-product/'+id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  finishOrder(userId:string, address:string, cartId:number){
    let token = localStorage.getItem('token');
    let order={
      address : address,
      city: "city",
      zipCode: "zipcode",
      userId: userId,
      cartId: cartId
    }
    console.log(order)
    return this.httpClient.post('http://localhost:8080/order', order, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  getCartProductId(){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/cart/cart-product/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  getAllOrders(){
    let token = localStorage.getItem('token');
    return this.httpClient.get<any>('http://localhost:8080/order/orders', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
}
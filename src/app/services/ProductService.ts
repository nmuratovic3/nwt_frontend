import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private httpClient: HttpClient) {

  }
  getProductList(): Observable<Product[]> {
    let token = localStorage.getItem('token');
    return this.httpClient.get<Product[]>('http://localhost:8080/product/products', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  addProduct(product: Product): Observable<any> {
    let token = localStorage.getItem('token');
    return this.httpClient.post('http://localhost:8080/product/products', product, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) }); //url za kreiranje produkta
  }

  getProductByGender(gender: string): Observable<Product[]> {
    let token = localStorage.getItem('token');
    return this.httpClient.get<Product[]>('http://localhost:8080/product/spol/'+gender, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
}
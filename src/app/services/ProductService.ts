import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
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
    return this.httpClient.post('http://localhost:8080/product/create', product, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) }); //url za kreiranje produkta
  }

  getProductByGender(gender: string): Observable<Product[]> {
    let token = localStorage.getItem('token');
    return this.httpClient.get<Product[]>('http://localhost:8080/product/spol/'+gender, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }

  getProductById(id:string):Observable<Product>{
    let token = localStorage.getItem('token');
    return this.httpClient.get<Product>('http://localhost:8080/product/product/'+id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }

  getCategories(){
    let token = localStorage.getItem('token');
    return this.httpClient.get<Category[]>('http://localhost:8080/product/category/categories', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  getCategoryById(id:string){
    let token = localStorage.getItem('token');
    return this.httpClient.get<Category>('http://localhost:8080/product/category/get/'+id, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });

  }
}
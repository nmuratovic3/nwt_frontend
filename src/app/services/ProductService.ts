import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { Observable } from "rxjs";

export class ProductService{
   constructor(private httpClient: HttpClient){

   }
   getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('');//url za getanje produkta
   }
}
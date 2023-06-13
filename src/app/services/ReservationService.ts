import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  constructor(private httpClient: HttpClient) {

  }
  getReservationsForUser(){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')
    return this.httpClient.get<any>('http://localhost:8080/user/reservation/reservations/'+email, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
  addToReservation(productId:string, userId:string){
    let token = localStorage.getItem('token');
    let email=localStorage.getItem('userEmail')

    let productForReservation={
      productId:productId,
      userId: userId
    }
    return this.httpClient.post('http://localhost:8080/user/reservation/'+email, productForReservation, { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) });
  }
}
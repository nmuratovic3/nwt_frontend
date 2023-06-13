import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { User } from 'src/app/models/user';
import { ReservationService } from 'src/app/services/ReservationService';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  curentUser: User;
  reservations: Product[]=[]
  constructor(private productService: ProductService, private reservationService: ReservationService) { }
  ngOnInit(): void {
    this.reservationService.getReservationsForUser().subscribe(data => {
      data.forEach((reservation: { productId: string; }) => {
        this.productService.getProductById(reservation?.productId).subscribe(res => {
          this.reservations.push(res)
        })
      })
    })

  }
}

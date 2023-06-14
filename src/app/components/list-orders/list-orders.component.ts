import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
data!: []
constructor(private cartService:CartService){}

ngOnInit(): void {
  this.cartService.getAllOrders().subscribe(data=>{
    console.log(data)
  })
}
}

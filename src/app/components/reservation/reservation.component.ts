import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
    curentUser: User;
    constructor(private userService:userService){}
    ngOnInit(): void {
      
    }
}

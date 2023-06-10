import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: userService) {

  }
  login() {
    this.userService.login("kapomuharem+1@gmail.com", "Password123!")
  }

}

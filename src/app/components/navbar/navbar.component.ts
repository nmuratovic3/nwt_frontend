import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showButtons: boolean = true;
  user:User | null;
  constructor(private userService: userService, private router: Router) { }

  ngOnInit(): void {
    this.userService.validateToken()
    if (localStorage.getItem('userEmail') != null) {
      this.showButtons = false
      this.userService.getCurrentUser().subscribe(result=>
        this.user=result
        )
    }
  }
  logout() {
    this.userService.logout()
    this.router.navigate(['']);
  }
}

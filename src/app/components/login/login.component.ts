import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private userService: userService, private router: Router) { }
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
    }
  }
  submitForm() { }
}

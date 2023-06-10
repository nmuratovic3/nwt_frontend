import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from '../components/services/userService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {

   constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: userService, private router:Router) { }

  profileForm!: FormGroup;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  saveProfile() {
    const profileData = this.profileForm.value;
  }

  register(){
    console.log("registracija", this.profileForm.value)
    this.userService.register(this.profileForm.value)
    this.router.navigate(['']);  
  }
}

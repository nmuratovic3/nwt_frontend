import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { userService } from '../services/userService';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: userService) { }

  profileForm!: FormGroup;
  user: User;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roles:[]
    });
    this.userService.getCurrentUser().subscribe(result => {
      this.user = result
      this.profileForm = result
    })
  }

  saveProfile() {
    const profileData = this.profileForm.value;

  }



}

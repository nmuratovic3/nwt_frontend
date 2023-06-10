import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {

   constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  profileForm!: FormGroup;

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postcode: ['', Validators.required]
    });
  }

  saveProfile() {
    const profileData = this.profileForm.value;
  
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  submitForm() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
  
      this.http.post('api/route', formData).subscribe(
        (response) => {
        })}
        
  }

  
}

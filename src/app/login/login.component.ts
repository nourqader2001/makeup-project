import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  form: FormGroup;
  message = '';
  message2 = '';

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    
  }

  newaccount() {
    this.router.navigate(['/newaccount']);
  }

  get f() {
    return this.form.controls;
  }
  login() {
    console.log(this.form.value); // Log form value to console
    this.message = ''; // Reset message
    this.message2 = ''; // Reset message2

    this.apiService.log_in(this.form.value) // Call log_in() method with form value
      .subscribe({
        next: (res: any) => { // Subscribe to the observable returned by log_in()
          console.log(res); // Log response to console
          if (res['message'] === 'Login successful') { // Check if login was successful
            this.message = 'Login successful'; // Set message to indicate successful login
            localStorage.setItem('user_data', JSON.stringify(res['user_data'])); // Store user data in localStorage
            console.log(res['user_data']); // Log user data to console
            this.router.navigate(['/home']); // Redirect to home page

        
          } else {
            this.message = 'Login failed'; // Set message to indicate failed login
          }
        }
      });
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  emailInput: string = '';
  newPasswordInput: string = '';
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  updatePassword() {
    const user = {
      email: this.emailInput,
      password: this.newPasswordInput
    };

    this.apiService.update_password(user)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res['message'] === 'Password updated successfully') {
            this.message = '';
            this.router.navigate(['/home']);
          } else {
            this.message = res['message'];
          }
        },
        error: (error: any) => {
          console.error(error);
          this.message = 'An error occurred while updating the password.';
        }
      });
  }
  
  // Method to update emailInput property dynamically
  updateEmail(event: any) {
    this.emailInput = event.target.value;
  }
  
  // Method to update newPasswordInput property dynamically
  updatePasswordInput(event: any) {
    this.newPasswordInput = event.target.value;
  }
}





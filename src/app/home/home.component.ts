import { ApiService } from '../service/ApiService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVisible = false;
  cards: any[] = [];
  username: string | undefined;
  products: any[] | undefined;

  constructor(private router: Router, private apiservice: ApiService) {}

  ngOnInit() {
    this.apiservice.get_categories().subscribe({
      next: (data: any) => {
        console.log(data);
        for(let pro of data){
          pro.newid = btoa(pro.id);
          console.log(pro.newid);
        }
        this.products = data;
      }
    });
    
    // Get user data from localStorage
    const userData = this.getUserDataFromLocalStorage();
    if (userData) {
      // Set the username
      this.username = userData.name;
    }
  }

  getUserDataFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('user_data') || '{}');
  }
}

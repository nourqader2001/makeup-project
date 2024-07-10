import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
user: any;
  apiService: any;
  categories: any;
  constructor(private router:Router){
}
islogin() : boolean{
  return this.router.url == "/login";
}
isUpdatePasswordPage(): boolean {

  return window.location.pathname === '/updatepassword'; 
}
logout(): void {
  localStorage.removeItem('user_data');
  this.router.navigate(['/login']);
}
isdashboard() : boolean{
  return this.router.url == "/dashboard";
}
isaddcategory() : boolean{
  return this.router.url == "/add-categoury";
}
isaddproduct() : boolean{
  return this.router.url == "/addproduct";
}
isgetcategorise() : boolean{
  return this.router.url == "/getcategories";
}
isgetprod() : boolean{
  return this.router.url == "/getprod";
}

}


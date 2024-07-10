import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseURL = "http://localhost/php/API/project";
  constructor(private Http: HttpClient) { }
  get_cards() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.Http.get<[]>(this.baseURL + '/get_catager.php',{ headers: headers });
  }
  get_card() {
    return this.Http.get<[]>(this.baseURL +'/get_product.php');
  }
  get_card_lipstick() {
    return this.Http.get<[]>(this.baseURL + '/get_lipstick.php');
  }
  get_product_eyes() {
    return this.Http.get<[]>(this.baseURL + '/get_product_eyes.php');
  }
  public inseruser(user:any){
    const body=JSON.stringify(user);
    return this.Http.post(this.baseURL+'/signin.php',body);

  }
  public log_in(user:any){
   
    const body=JSON.stringify(user);
    return this.Http.post(this.baseURL+'/log_in.php',body);
   } 
   public update_password(user:any){
    const body=JSON.stringify(user);
    return this.Http.post(this.baseURL+'/updatepassword.php',body);
   } 
   get_products(cond: any = ''): Observable<any[]> {
    return this.Http.get<any[]>(this.baseURL + '/get_products.php?cond=' + cond);
  }
  get_categories(cond: any = ''): Observable<any[]> {
    return this.Http.get<any[]>(this.baseURL + '/get_categories.php?cond=' + cond);
  }
  public addcategourt(user:any){
    // const body=JSON.stringify(user);
    // return this.Http.post(this.baseURL+'/add_categories.php',body);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.Http.post<any>(this.baseURL + '/add_categories.php', user, {headers: headers})
    .pipe(map((res: any) => {
      return res;
      }));
    }
  public addproduct(user:any){
    // const body=JSON.stringify(user);
    // return this.Http.post(this.baseURL+'/addproducts.php',body);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.Http.post<any>(this.baseURL + '/addproducts.php', user, {headers: headers})
    .pipe(map((res: any) => {
      return res;
      }));

  }
  getprod() {
    
    return this.Http.get<[]>(this.baseURL + '/getprod.php');
  }
}
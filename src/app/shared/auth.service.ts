import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roleAs: any;

  constructor() { }
  isLogin(){
    return !!localStorage.getItem('user_data')
  }
  getRole() {
    let user_data: any =localStorage.getItem('user_data');
    user_data= JSON.parse(user_data)
    this.roleAs=user_data['type'];
    return this.roleAs;
  }

}

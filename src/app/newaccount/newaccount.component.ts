import { ApiService } from './../service/ApiService';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent {
  form:FormGroup 
  message=''
  message2=''

  constructor(private FormBuilder: FormBuilder ,private apiservice:ApiService,private router:Router){

    this.form=this.FormBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required , Validators.minLength(8)]]

    })
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value)
    this.message=''
    this.message2=''
    this.apiservice.inseruser(this.form.value)
    .subscribe({next:(res:any)=>{
      console.log(res)
      if(res['message']=='Operation successful'){
        this.message=''
        this.router.navigate(['/home']);
      }else{
        this.message2=res['message']

      }
  }})

  }
}


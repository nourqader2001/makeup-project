import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.css']
})
export class EyesComponent {
  showMessage = false;

  toggleMessage(show: boolean) {
    this.showMessage = show;
  }
  constructor(private apiservice:ApiService) {

  }
 cards:any[]=[];
 ngOnInit() : void{
  this.apiservice.get_product_eyes().subscribe({ next:(data:any)=>{
    console.log(data);
    this.cards=data;
  }})
 
}
 
}
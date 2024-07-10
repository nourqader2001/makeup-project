import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent {
  showMessage = false;

  toggleMessage(show: boolean) {
    this.showMessage = show;
  }
  constructor(private apiservice:ApiService) {

  }
  cards:any[]=[];
  
 ngOnInit() : void{
  this.apiservice.get_card_lipstick().subscribe({ next:(data:any)=>{
    console.log(data);
    this.cards=data;
  }})
 
}


}

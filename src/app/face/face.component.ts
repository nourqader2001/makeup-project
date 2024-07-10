import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  showMessage = false;
  route: any;
  userId: string | undefined;
  prodcut: any=[];
prodcuts: any;
  toggleMessage(show: boolean) {
    this.showMessage = show;
  }
  
  constructor(private apiservice:ApiService) {

  }
//  cards:any[]=[];
 ngOnInit() : void{
  const hashedId = this.route.snapshot.paramMap.get('id');
  if (hashedId) {
    this.userId = atob(hashedId);
  } else {
    console.error('ID parameter is missing');
  }
  console.log(this.userId)
  this.apiservice.get_products(' id='+this.userId)
  .subscribe({ next:(data:any)=>{
    console.log(data)
    this.prodcut=data[0]
  }})
}

  }




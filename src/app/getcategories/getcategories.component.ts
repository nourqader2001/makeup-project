import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-getcategories',
  templateUrl: './getcategories.component.html',
  styleUrls: ['./getcategories.component.css']
})
export class GetcategoriesComponent {
category: any;
  constructor(private apiservice:ApiService) {

  }
  categories:any[]=[];
  
 ngOnInit() : void{
  this.apiservice.get_cards().subscribe({ next:(data:any)=>{
    console.log(data);
    for(let emp of data){
      emp.newid=btoa(emp.id)
      
      emp.src=this.apiservice.baseURL+emp.src  
    }

    this.categories=data;
    
  }})
 
}


}

import { Component } from '@angular/core';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-getprod',
  templateUrl: './getprod.component.html',
  styleUrls: ['./getprod.component.css']
})
export class GetprodComponent {

  constructor(private apiService: ApiService) {}

  products: any[] = [];
  
  ngOnInit(): void {
    this.apiService.getprod().subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/ApiService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage = false;
  products:any []=[]

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }
  toggleMessage(show: boolean) {
    this.showMessage = show;
  }
  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id')
    let hashed;
    if(id){
     hashed=atob(id)
    }
    this.apiservice.get_products(' id_cate_product ='+hashed).subscribe({
      next: (data: any[]) => {
        console.log(data);
        data.forEach((product) => {
          product.newid = btoa(product.id);
        });
        console.log(data);
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
      
      }
    });}
  }


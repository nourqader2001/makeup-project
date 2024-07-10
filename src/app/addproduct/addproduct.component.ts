import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/ApiService';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  form: FormGroup;
  message: string = '';
  message2: string = '';
  categouries: any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      id_cate_product: ['', Validators.required],
      image:[''],
      fileSource:['']

    });
  }

  public  onFileChange(event:any){
    console.log(event.target.files)
       if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.form.patchValue({
          fileSource: file
        });
      }
  }

  submit(){
    console.log(this.form.value)
    this.message=''
    this.message2=''
    const formData = new FormData();
    formData.append('fileSource',this.form.controls['fileSource'].value);
    formData.append('name',this.form.controls['name'].value);
    formData.append('price',this.form.controls['price'].value);
    formData.append('description',this.form.controls['description'].value);
    formData.append('quantity',this.form.controls['quantity'].value);
    formData.append('id_cate_product',this.form.controls['id_cate_product'].value);
    formData.append('image',this.form.controls['image'].value);
    this.apiService.addcategourt(formData)
    .subscribe({ next:(res:any)=>{
      console.log(res);
      if(res['message']=="Operation successful")
        {
          this.message="Operation successful"

        }else{
          this.message2=res['message']
        }
    }})
  }
  ngOnInit() : void{
    
    this.apiService.get_cards().subscribe({ next:(data:any)=>{
      console.log(data);
      this.categouries=data;
    }})

}}

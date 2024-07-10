import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/ApiService';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  form: FormGroup;
  message: string = '';
  message2: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      src:[''],
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
    formData.append('src',this.form.controls['src'].value);
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

      };


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EyesComponent } from './eyes/eyes.component';
import { FaceComponent } from './face/face.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ProductsComponent } from './products/products.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetcategoriesComponent } from './getcategories/getcategories.component';
import { GetprodComponent } from './getprod/getprod.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EyesComponent,
    FaceComponent,
    LipstickComponent,
    AboutusComponent,
    NewaccountComponent,
    UpdatepasswordComponent,
    ProductsComponent,
    AddcategoryComponent,
    AddproductComponent,
    DashboardComponent,
    GetcategoriesComponent,
    GetprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

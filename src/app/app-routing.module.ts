import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EyesComponent } from './eyes/eyes.component';
import { FaceComponent } from './face/face.component';
import { LipstickComponent } from './lipstick/lipstick.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { AuthGuard } from './shared/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetcategoriesComponent } from './getcategories/getcategories.component';
import { GetprodComponent } from './getprod/getprod.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard],data:{role:['user']}},
  {path:'eyes',component:EyesComponent, canActivate: [AuthGuard]},
  {path:'face',component:FaceComponent, canActivate: [AuthGuard]},
  {path:'lipstick',component:LipstickComponent, canActivate: [AuthGuard]},
  {path:'aboutus',component:AboutusComponent ,canActivate: [AuthGuard]},
  {path:'newaccount',component:NewaccountComponent},
  {path:'add-categoury',component:AddcategoryComponent, canActivate: [AuthGuard]},
  {path:'addproduct',component:AddproductComponent, canActivate: [AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard], data:{role:['admin']}},
  {path:'getcategories',component:GetcategoriesComponent, canActivate: [AuthGuard]},
  {path:'getprod',component:GetprodComponent, canActivate: [AuthGuard]},
  {path:'updatepassword',component:UpdatepasswordComponent},
  { path: 'products/:id', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'face/:id', component: FaceComponent, canActivate: [AuthGuard] },
  {path:'',redirectTo:"/login",pathMatch:"full"}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

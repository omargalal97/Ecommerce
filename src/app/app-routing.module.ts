import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AddNewProductComponent} from './add-new-product/add-new-product.component'



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Register', component: RegistrationComponent },
  { path: 'HomeList', component: HomeListComponent },
  { path: 'HomeDetails', component: HomeDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productdetails', component: ProductDetailsComponent },
  { path: 'add-new-product', component: AddNewProductComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

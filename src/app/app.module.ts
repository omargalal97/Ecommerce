import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HomeListComponent,
    HomeDetailsComponent,
    ProductDetailsComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

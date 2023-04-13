import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './components/products/products.component';
import { CaruselComponent } from './components/carusel/carusel.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CaruselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

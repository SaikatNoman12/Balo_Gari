import { ProductCardTwoModule } from './../../shared/lazy-component/product-card-two/product-card-two.module';
import { MaterialModule } from './../../material/material.module';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    ProductCardOneModule,
    MaterialModule,
    ProductCardTwoModule
  ]
})
export class HomeModule { }

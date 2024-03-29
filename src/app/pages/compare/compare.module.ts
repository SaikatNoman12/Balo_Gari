import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';


@NgModule({
  declarations: [
    CompareComponent
  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    MaterialModule
  ]
})
export class CompareModule { }

import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareDetailsRoutingModule } from './compare-details-routing.module';
import { CompareDetailsComponent } from './compare-details.component';


@NgModule({
  declarations: [
    CompareDetailsComponent
  ],
  imports: [
    CommonModule,
    CompareDetailsRoutingModule,
    MaterialModule
  ]
})
export class CompareDetailsModule { }

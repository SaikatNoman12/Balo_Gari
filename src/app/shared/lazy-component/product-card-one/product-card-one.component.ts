import { Component, Input, OnInit } from '@angular/core';
import { ProductCardOne } from 'src/app/interfaces/product-card-one';

@Component({
  selector: 'app-product-card-one',
  templateUrl: './product-card-one.component.html',
  styleUrls: ['./product-card-one.component.scss']
})
export class ProductCardOneComponent implements OnInit {
  @Input() data?:ProductCardOne;

  constructor() { }

  ngOnInit(): void {
  }

}

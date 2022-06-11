import { Component, OnInit } from '@angular/core';
import { CompareService } from 'src/app/services/compare.service';

@Component({
  selector: 'app-compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.scss']
})
export class CompareDetailsComponent implements OnInit {

  cars:any = [];

  constructor(
    private compareService:CompareService

  ) { }

  ngOnInit(): void {
    this.cars = this.compareService.getCompareCars()
  }
 

}

import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerFixed = false;
  menuSlide = false;

  constructor(
    private router : Router
  ) { }

  
  ngOnInit(): void {

    this.router.events.subscribe((e) =>{
      if(!(e instanceof NavigationEnd)){
        return;
      }
    })
    window.scrollBy(0,0);


  }
  /*** header fixed code */
  @HostListener('window:scroll') 
  headerFixedMethod(){
    if(window.scrollY > 300){
      this.headerFixed = false;
    }else{
      this.headerFixed = false;
    }

  }
  /** slide active */
  slideMenuActive(){
    this.menuSlide = true;
  }
  slideMenuInactive(){
    this.menuSlide = false;
  }
}

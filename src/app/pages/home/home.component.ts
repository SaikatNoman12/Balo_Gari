import { ChooseMaker } from './../../interfaces/choose-maker';
import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, OnInit } from '@angular/core';
import { BannerCarousel } from 'src/app/interfaces/banner-carousel';
import { ProductCardOne } from 'src/app/interfaces/product-card-one';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private carouselCntrlService : CarouselCntrlService,
  ) { }

  ngOnInit(): void {
  }
  /*** banner-carousel data */
  bannerData:BannerCarousel[]=[
    {
      _id:'1',
      image:'./assets/images/image/MicrosoftTeams_image_90_.webp',
      routerLink:"#"
    },
    {
      _id:'2',
      image:'./assets/images/image/MicrosoftTeams_image_96_.webp',
      routerLink:"#"
    },
    {
      _id:'3',
      image:'./assets/images/image/One_Stopauto_Solution_2_28092021.jpeg',
      routerLink:"#"
    },
    {
      _id:'4',
      image:'./assets/images/image/MicrosoftTeams_image_89_.webp',
      routerLink:"#"
    },
    {
      _id:'5',
      image:'./assets/images/image/auctiob_banner_current.jpeg',
      routerLink:"#"
    },
    {
      _id:'6',
      image:'./assets/images/image/Buy-any-Car-Hassle-Free_01092021.jpeg',
      routerLink:"#"
    }
  ]
  popularData:ProductCardOne[]=[
    {
      _id:'1',
      image:'./assets/images/image/Premio_1636805239_4033148.JPG',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    },
    {
      _id:'2',
      image:'./assets/images/image/Noah_1636543367_3057208.jpg',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    },
    {
      _id:'3',
      image:'./assets/images/image/Land_Cruiser_Prado_1635070229_5144079.jpg',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    },
    {
      _id:'4',
      image:'./assets/images/image/Harrier_1640000030_6811304.webp',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    },
    {
      _id:'5',
      image:'./assets/images/image/Allion_1643104585_6289778.webp',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    },
    {
      _id:'6',
      image:'./assets/images/image/Corolla_1640106775_9746332.webp',
      title:'Toyota Noah 4.5 X PKG',
      routerLink:'',
      price:"27.40",
      tag:'Sedan'
    }
  ]

  makerData:ChooseMaker[]=[
    {
      _id:"1",
      image:"./assets/images/image/toyota_new.svg",
      name:'Toyota',
      routerLink:'#'
    },
    {
      _id:"2",
      image:"./assets/images/image/honda_new.svg",
      name:'Honda',
      routerLink:'#'
    },
    {
      _id:"3",
      image:"./assets/images/image/9c1a2f4130f7a5073f89b9a6305237bc.svg",
      name:'Mitsubishi',
      routerLink:'#'
    },
    {
      _id:"4",
      image:"./assets/images/image/nissan_new.svg",
      name:'Nissan',
      routerLink:'#'
    },
    {
      _id:"5",
      image:"./assets/images/image/unnamed.svg",
      name:'Hyundai',
      routerLink:'#'
    },
    {
      _id:"6",
      image:"./assets/images/image/908-9086214_kia-motors-logo-png-image-kia-car-logo.svg",
      name:'KIA',
      routerLink:'#'
    },
    {
      _id:"7",
      image:"./assets/images/image/bmw_new.svg",
      name:'BMW',
      routerLink:'#'
    },
    {
      _id:"8",
      image:"./assets/images/image/toyota_new.svg",
      name:'Toyota',
      routerLink:'#'
    },
    {
      _id:"9",
      image:"./assets/images/image/mercedes-benz-logo-190x132_nVwdfnd.svg",
      name:'Mercedes Benz',
      routerLink:'#'
    },
    {
      _id:"10",
      image:"./assets/images/image/toyota_new.svg",
      name:'Toyota',
      routerLink:'#'
    },
    {
      _id:"11",
      image:"./assets/images/image/honda_new.svg",
      name:'Honda',
      routerLink:'#'
    },
    {
      _id:"12",
      image:"./assets/images/image/9c1a2f4130f7a5073f89b9a6305237bc.svg",
      name:'Mitsubishi',
      routerLink:'#'
    },
    {
      _id:"13",
      image:"./assets/images/image/nissan_new.svg",
      name:'Nissan',
      routerLink:'#'
    },
    {
      _id:"14",
      image:"./assets/images/image/unnamed.svg",
      name:'Hyundai',
      routerLink:'#'
    },
    {
      _id:"15",
      image:"./assets/images/image/908-9086214_kia-motors-logo-png-image-kia-car-logo.svg",
      name:'KIA',
      routerLink:'#'
    },
    {
      _id:"16",
      image:"./assets/images/image/bmw_new.svg",
      name:'BMW',
      routerLink:'#'
    },
    {
      _id:"17",
      image:"./assets/images/image/toyota_new.svg",
      name:'Toyota',
      routerLink:'#'
    },
    {
      _id:"18",
      image:"./assets/images/image/mercedes-benz-logo-190x132_nVwdfnd.svg",
      name:'Mercedes Benz',
      routerLink:'#'
    }
  ]
  bodyData:any[]=[
    {
      _id:"1",
      image:"./assets/images/image/Sedan1.svg",
      routerLink:"#",
      name:"Sedan"
    },
    {
      _id:"2",
      image:"./assets/images/image/SUV1.svg",
      routerLink:"#",
      name:"SUV"
    },
    {
      _id:"3",
      image:"./assets/images/image/CrossOver4.svg",
      routerLink:"#",
      name:"Crossover"
    },
    {
      _id:"4",
      image:"./assets/images/image/Hatchback1.svg",
      routerLink:"#",
      name:"Hatchback"
    },
    {
      _id:"5",
      image:"./assets/images/image/MiniVan1.svg",
      routerLink:"#",
      name:"Minivan"
    },
    {
      _id:"6",
      image:"./assets/images/image/Wagon1.svg",
      routerLink:"#",
      name:"Wagon"
    },
    {
      _id:"7",
      image:"./assets/images/image/OffRoaderGray.svg",
      routerLink:"#",
      name:"Off Roader"
    },
    {
      _id:"8",
      image:"./assets/images/image/Compact1.svg",
      routerLink:"#",
      name:"Compact"
    }
  ]

  articleData:any[] =[
    {
      _id:"1",
      image:"./assets/images/image/2020-honda-cr-v-buy-it.jpg",
      title:"Honda CR-V 2020: Are you planning to buy?",
      description:"The Honda CR-V is one of the best-selling vehicles for the Japanese automobile manufacturer Honda. It is a small SUV. The model was first introduced in 1997, and it has now entered its fifth generation. Because...",
      routerLink:"#",
      tag:"Reviews"
    },
    {
      _id:"2",
      image:"./assets/images/image/advantages-of-engine-oil-change-1160x653.jpg",
      title:"Advantages of Regular Engine Oil Change",
      description:"Why is it so important to change motor oil on a regular basis? – It’s a common query we get from our valued customers at our Bhalogari service center. Oil changes should be conducted regularly to keep your...",
      routerLink:"#",
      tag:"Auto Culture"
    },
    {
      _id:"3",
      image:"./assets/images/image/Toyota-will-reduce-global-manufacturing-by-40-due-to-chip-shortages-ca59ef5f-1160x653.jpg",
      title:"TOYOTA will reduce global manufacturing by 40% due to chip shortages.",
      description:"Due to the global microprocessor shortage, Toyota intends to cut production in the world by 40% in September. The largest car manufacturer in the world planned to produce roughly 900,000 cars in the.",
      routerLink:"#",
      tag:"Lates"
    }
  ]

  

}

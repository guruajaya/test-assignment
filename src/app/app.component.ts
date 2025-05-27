import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './services/common.service';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import * as data from './mock/user.json';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent implements OnInit{
  title = 'prodectlist';
  allproducts:any;
  myProducts = (data as any).default;
  isVisibleTable=false;
  isVisibleCard : boolean = true;
  // cardNumber:number[]=[]


  isToggle(){
    this.isVisibleCard= !this.isVisibleCard;
  }
  
  
  constructor(private commonservice:CommonService){
    
  }

 ngOnInit() {
  this.commonservice.getProductList().subscribe((data:any)=>{
    this.allproducts=data;
    console.log(this.allproducts)
    

  })
  
 }
}

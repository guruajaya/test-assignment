import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './common.service';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent implements OnInit{
  title = 'prodectlist';
  allproducts:any;
  constructor(private commonservice:CommonService){}

 ngOnInit() {
  this.commonservice.getProductList().subscribe((data:any)=>{
    this.allproducts=data;
    console.log(this.allproducts)
  })
  
 }
}

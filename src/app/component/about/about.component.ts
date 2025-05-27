import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  allproducts:any;
  constructor(private commonservice:CommonService){
    
  }

 ngOnInit() {
  this.commonservice.getProductList().subscribe((data:any)=>{
    this.allproducts=data;
    console.log(this.allproducts)
    

  })
  
 }

}

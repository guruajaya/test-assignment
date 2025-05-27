import { Component, inject, Inject, Injector } from '@angular/core';
import { CommonService } from '../services/common.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allproducts: any;
  isVisibleTable = false;
  isVisibleCard: boolean = true;
  listuser: any;

  // private http = inject(HttpClient);

  constructor(private commonservice: CommonService) {

  }

  ngOnInit() {
    this.commonservice.getnewproductList().subscribe((response) => {
      this.listuser = response;
    })
    
  }
  deleteIitem(id:any) {    
    this.commonservice.deleteItem(id).subscribe((data)=>{
      this.listuser=data;
    })

  }
}
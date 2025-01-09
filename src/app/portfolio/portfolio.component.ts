import { Component } from '@angular/core';
import { DarkStarComponent } from "../dark-star/dark-star.component";
@Component({
  selector: 'app-portfolio',
  imports: [DarkStarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images: string[] = 
  [
     "/images/poert1.png",  "/images/port2.png",  "/images/port3.png" 
  ]
   photo:string="";
   showModal: boolean = false;
  modalShow(item:string)
  {
     this.photo=item;
     this.showModal=true;
  }
  modalHide()
  {
     this.showModal = false;
  }
}

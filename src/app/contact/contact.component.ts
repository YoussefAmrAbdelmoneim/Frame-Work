import { Component, input } from '@angular/core';
import { DarkStarComponent } from '../dark-star/dark-star.component';
@Component({
  selector: 'app-contact',
  imports: [DarkStarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  labelShowName:boolean=false;
  labelShowAge:boolean=false;
  labelShowEmail:boolean=false;
  labelShowPassword:boolean=false;
  showLabelName(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    this.labelShowName = inputValue.length > 0;
  }
  showLabelAge(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    this.labelShowAge = inputValue.length > 0;
  }
  showLabelEmail(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    this.labelShowEmail = inputValue.length > 0;
  }
  showLabelPassword(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    this.labelShowPassword = inputValue.length > 0;
  }
}

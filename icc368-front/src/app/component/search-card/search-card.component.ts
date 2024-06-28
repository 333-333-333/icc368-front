import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {

  @Input() cardData!: { 
    title: string,
    description: string, 
    date:string, 
    url:string
  };

  constructor(private router: Router) {}

  openCard() {
    this.router.navigate([this.cardData.url]);
  }

}

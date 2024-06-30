import { RouterService } from '../../../service/router.service';
import { AppComponent } from './../../main/app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unavailable-search-list',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './unavailable-search-list.component.html',
  styleUrl: './unavailable-search-list.component.css'
})
export class UnavailableSearchListComponent {

  constructor(private routerService : RouterService) { }
  
  navigate(route: string): void {
    this.routerService.emitRoutingEvent(route);
  }

}

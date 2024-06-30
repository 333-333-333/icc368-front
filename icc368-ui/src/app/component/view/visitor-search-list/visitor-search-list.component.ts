import { routes } from './../../main/app.routes';
import { Component } from '@angular/core';
import { RouterService } from '../../../service/router.service';

@Component({
  selector: 'app-visitor-search-list',
  standalone: true,
  imports: [],
  templateUrl: './visitor-search-list.component.html',
  styleUrl: './visitor-search-list.component.css'
})
export class VisitorSearchListComponent {

  constructor(private routerService : RouterService) { }

  navigate(route: string) {
    this.routerService.emitRoutingEvent(route);
  }

}

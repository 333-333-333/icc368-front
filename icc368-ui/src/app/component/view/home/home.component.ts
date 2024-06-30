import { Component } from '@angular/core';
import { AppComponent } from '../../main/app.component';
import { RouterService } from '../../../service/router.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private routerService: RouterService) { }

  navigate(route: string): void {
    this.routerService.emitRoutingEvent(route);
  }

}

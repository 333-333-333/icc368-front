import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { SidebarService } from '../../service/sidebar.service';
import { AppModule } from './app-routing.module';
import { RouterService } from '../../service/router.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, AppModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'icc368-ui';

  isSidebarOpen = true;
  
  constructor(private sidebarService : SidebarService, 
              private routerService : RouterService,
              private router : Router ) { }

  ngOnInit(): void {
    this.sidebarService.menuClickEvent.subscribe(() => {
      this.toggleSidebar();
    });
    this.routerService.routingEvent.subscribe((route: string) => {
      this.route(route);
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  route(route: string) {
    this.router.navigate([route]);
  }
  
}

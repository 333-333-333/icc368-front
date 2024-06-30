import { SidebarService } from './../../../service/sidebar.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppModule } from '../../main/app-routing.module';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = true;

  constructor(private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.menuClickEvent.subscribe(() => {
      this.toggleSidebar();

    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}

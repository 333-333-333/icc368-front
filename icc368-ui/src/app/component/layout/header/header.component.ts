import { SidebarService } from './../../../service/sidebar.service';
import { Component } from '@angular/core';
import { EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 // Emmits the event to toggle the sidebar
  @Output() toggleSidebarEvent = new EventEmitter<void>();


  constructor(private sidebarService: SidebarService) { }

  // Toggles the sidebar
  toggleSidebar() {
    this.sidebarService.emitMenuClick();
  }

}

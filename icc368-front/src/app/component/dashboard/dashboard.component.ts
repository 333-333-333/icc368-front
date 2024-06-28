import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { SearchCardComponent } from '../search-card/search-card.component';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule, SidebarComponent, HeaderComponent, SearchCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user: User = {
    name: 'Usuario',
    avatar: 'https://w7.pngwing.com/pngs/379/135/png-transparent-moses-otieno-kajwang-lawyer-illinois-business-lawyer-people-united-states-necktie-thumbnail.png'
  };

  newestSearches = [
    { title: 'Búsqueda 1', description: 'Descripción de la búsqueda 1', date: '2023-01-01', url: '/search1' },
    { title: 'Búsqueda 2', description: 'Descripción de la búsqueda 2', date: '2023-01-02', url: '/search2' },
    { title: 'Búsqueda 3', description: 'Descripción de la búsqueda 3', date: '2023-01-03', url: '/search3' }
  ];

  sidebarVisible: boolean = true;

  toggleSidebar(): void {
    console.log('toggleSidebarHere');
    this.sidebarVisible = !this.sidebarVisible;
  }
}
import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class SidebarComponent implements OnInit {
  @Input()
  userData!: User;
  menuOpen: boolean = false;
  isDropdownOpen: boolean = false;
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {

  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(): void {
    window.location.href = '/logout';
  }
}

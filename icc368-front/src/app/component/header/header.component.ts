import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() userData!: User;
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar(): void {
    this.sidebarToggle.emit();
    console.log('toggleSidebar');
  }
}
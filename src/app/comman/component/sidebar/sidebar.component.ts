import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  activeMenu!: string | null;
  toggleMenu(menuKey: string) {
    if (this.activeMenu == menuKey) {
      this.activeMenu = null;
    } else {
      this.activeMenu = menuKey;
    }
  }

  isMenuOpen(menuKey: string): boolean {
    return this.activeMenu == menuKey;
  }
}

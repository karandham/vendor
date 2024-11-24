import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}
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

  getdata(data: string) {
    this.router.navigate([data]);
  }
}

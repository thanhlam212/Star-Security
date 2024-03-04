import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  isDropdownOpen = false;
  isNavBarVisible = true;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public toggleSignIn() : void {
    this.isNavBarVisible = !this.isNavBarVisible;
  }
}

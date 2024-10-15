import { Component } from '@angular/core';
import { NgIf } from '@angular/common';  // Import NgIf for *ngIf

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // isDropdownOpen = false;

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }
  isDropdownOpen: number | null = null;  // Use number to track open dropdown

  toggleDropdown(dropdownId: number) {
    if (this.isDropdownOpen === dropdownId) {
      this.isDropdownOpen = null;  // Close the dropdown if it’s already open
    } else {
      this.isDropdownOpen = dropdownId;  // Open the clicked dropdown
    }
  }
}

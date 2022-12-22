import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isAlgorithmsDropdownVisible: boolean = false;
  openAlgorithmsDropdown() {
    console.log("fefwe")
    this.isAlgorithmsDropdownVisible = true;
  }

  closeDropdown() {
    this.isAlgorithmsDropdownVisible = false;
  }
}

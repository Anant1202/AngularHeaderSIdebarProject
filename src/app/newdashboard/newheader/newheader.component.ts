import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrl: './newheader.component.css',
})
export class NewheaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor() {}

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}

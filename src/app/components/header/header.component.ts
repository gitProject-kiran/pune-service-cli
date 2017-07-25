import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('toggleButton') toggleButton: ElementRef;
  toggleButtonIsVisible() {
    console.log("==>", this.toggleButton.nativeElement);
    return this.toggleButton.nativeElement.offsetParent !== null;
  }
  collapseNav() {
    if (this.toggleButtonIsVisible()) {
      this.toggleButton.nativeElement.click();
    }
  }
}

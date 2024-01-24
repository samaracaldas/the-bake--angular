import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (clickedInside) {
      this.isOpen = !this.isOpen;
    }
  }

  constructor(private eRef: ElementRef) { }
}
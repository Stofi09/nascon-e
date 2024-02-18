import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class NavbarComponent implements AfterViewInit {
  
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChild('burger') burger!: ElementRef;
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.listen(this.burger.nativeElement, 'click', () => {
      this.toggleNavbar();
    });
  }

  toggleNavbar() {
    // Check if the 'nav-active' class is already applied and toggle accordingly
    if (this.navLinks.nativeElement.classList.contains('nav-active')) {
      this.renderer.removeClass(this.navLinks.nativeElement, 'nav-active');
    } else {
      this.renderer.addClass(this.navLinks.nativeElement, 'nav-active');
    }
    
    // Toggle the 'toggle' class for burger animation
    if (this.burger.nativeElement.classList.contains('toggle')) {
      this.renderer.removeClass(this.burger.nativeElement, 'toggle');
    } else {
      this.renderer.addClass(this.burger.nativeElement, 'toggle');
    }
  }
}

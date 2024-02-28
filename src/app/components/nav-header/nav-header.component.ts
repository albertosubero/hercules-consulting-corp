import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  mobileMenuIsOpen: boolean = false;
  openLangDropdown: boolean = false;
  currentLang: string = '';
  
  public innerWidth: number = 0;
  isResponsive: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
  }

  constructor(public translate: TranslateService, private router: Router){
    this.currentLang = this.translate.currentLang;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 992) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
    }
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Navigation is starting...
        if (this.isResponsive) {
          if (this.mobileMenuIsOpen) {
            this.toggleMobileMenu()
          }
        }
      }
    });
  }

  setTransLanguage(lang: string){
    this.translate.use(lang)
    this.currentLang = lang
    this.openLangDropdown = false
    localStorage.setItem('lang', lang)
  }

  toggleMobileMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    if (this.mobileMenuIsOpen) {
      window.onscroll = function () { window.scrollTo(0, 0); };
    } else {
      window.onscroll=function(){};
    }
  }
}

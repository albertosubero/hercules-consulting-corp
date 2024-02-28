import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  mobileMenuIsOpen: boolean = false;
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
          this.mobileMenuIsOpen = false;
        }
      }
    });
  }

  setTransLanguage(lang: string){
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

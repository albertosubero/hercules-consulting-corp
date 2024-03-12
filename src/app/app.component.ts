import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos'
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,  './assets/i18n/', '.json');
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hercules-consulting-corp';
  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang()!;
    const storageLang: string = localStorage.getItem('lang')!;

    if (!storageLang) {
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
      localStorage.setItem('lang', browserLang.match(/en|es/) ? browserLang : 'en')
    } else {
      translate.use(storageLang)
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  ngAfterViewInit() {
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        AOS.init();
        window.addEventListener('scroll', AOS.refresh);
      } 
    }
  }
}

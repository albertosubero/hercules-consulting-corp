import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
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

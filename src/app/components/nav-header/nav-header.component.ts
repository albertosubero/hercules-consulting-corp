import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(public translate: TranslateService){
    this.currentLang = this.translate.currentLang;
  }

  setTransLanguage(lang: string){
    this.translate.use(lang);
    this.currentLang = lang;
  }
}

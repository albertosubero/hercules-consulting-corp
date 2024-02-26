import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hercules-consulting-corp';
  constructor() {}

  ngAfterViewInit() {
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        AOS.init();
        window.addEventListener('scroll', AOS.refresh);
      } 
    }
  }
}

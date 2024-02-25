import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hercules-consulting-corp';
  constructor(private router: Router) {}
  
  ngOnInit() {
    AOS.init()
    this.router.events.subscribe((event) => {
      window.addEventListener('load', AOS.refresh)
    });
  }
}

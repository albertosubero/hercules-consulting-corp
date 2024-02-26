import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CarouselModule, ArticleCardComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      992: {
        items: 4
      },
    },
    nav: true
  }
}

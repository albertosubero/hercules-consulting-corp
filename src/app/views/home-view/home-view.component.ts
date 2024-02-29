import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { TestimonialsCarouselComponent } from '../../components/testimonials-carousel/testimonials-carousel.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CarouselModule, ArticleCardComponent, TestimonialsCarouselComponent, TranslateModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      },
    },
    nav: true
  }
}
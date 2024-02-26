import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ProductCardComponent, CarouselModule, ArticleCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
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

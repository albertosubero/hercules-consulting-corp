import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { TestimonialsCarouselComponent } from '../../components/testimonials-carousel/testimonials-carousel.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ProductCardComponent, CarouselModule, ArticleCardComponent, TestimonialsCarouselComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {}

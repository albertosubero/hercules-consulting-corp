import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CarouselModule, CommonModule, TranslateModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  articlesCarousel: OwlOptions = {
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
        items: 3
      },
    },
    nav: true
  }

  articlesData = [
    {
      id: 1,
      title: 'general.we_enhance_talent2',
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      date: '07/02/2024',
      url: '',
      image: 'image-article-001.png'
    },
    {
      id: 2,
      title: 'general.we_enhance_talent2',
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      date: '07/02/2024',
      url: '',
      image: 'image-article-002.png'
    },
    {
      id: 3,
      title: 'general.we_enhance_talent2',
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      date: '07/02/2024',
      url: '',
      image: 'image-article-003.png'
    },
  ]
}

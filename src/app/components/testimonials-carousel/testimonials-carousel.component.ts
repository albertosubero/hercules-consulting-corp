import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.css'
})
export class TestimonialsCarouselComponent {
  testimonialsCarousel: OwlOptions = {
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
      576: {
        items: 2
      },
      992: {
        items: 4
      },
    },
    nav: true
  }

  testimonialsData = [
    {
      id: 1,
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      name: 'Jhoarling Reina',
      image: 'image-testimonial-001.png'
    },
    {
      id: 2,
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      name: 'Maicol Duran',
      image: 'image-testimonial-002.png'
    },
    {
      id: 3,
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      name: 'Natalia Lopez',
      image: 'image-testimonial-003.png'
    },
    {
      id: 4,
      content: 'Lorem Ipsum is simply dummy text of the printing and the in typesetting industry.',
      name: 'Leonardo Duran',
      image: 'image-testimonial-004.png'
    }
  ]
}

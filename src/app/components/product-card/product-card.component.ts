import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface productI {
  'id': Number;
  'description': String;
  'img': String;
  'url': String;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data: productI[] = [];
  limit: number = 8;

  ngOnInit() {
    this.data = [
      {
        'id': 1,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-001.png',
        url: ''
      },
      {
        'id': 2,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-002.png',
        url: ''
      },
      {
        'id': 3,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-003.png',
        url: ''
      },
      {
        'id': 4,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-004.png',
        url: ''
      },
      {
        'id': 5,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-005.png',
        url: ''
      },
      {
        'id': 6,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-006.png',
        url: ''
      },
      {
        'id': 7,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-007.png',
        url: ''
      },
      {
        'id': 8,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-008.png',
        url: ''
      },
      {
        'id': 9,
        description: 'Lorem Ipsum is simply of the dummy text.',
        img: 'image-product-008.png',
        url: ''
      }
    ]
  }
}

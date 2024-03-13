import { Component } from '@angular/core';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { recruitmentData } from '../../utils/content/recruitment';
import { reviewsVideosData } from '../../utils/content/reviews-videos';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [CarouselModule, InfoCardComponent, RouterModule, SafePipe, TranslateModule],
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.css'
})
export class RecruitmentComponent {
  recruitmentData = recruitmentData;
  reviewsVideosData = reviewsVideosData;
  videosLimit: number = 4;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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
  }
}

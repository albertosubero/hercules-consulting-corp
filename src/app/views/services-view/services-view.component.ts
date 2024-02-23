import { Component } from '@angular/core';
import { InfoCardComponent, articleI } from '../../components/info-card/info-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { trainingData } from '../../utils/content/training';
import { recruitmentData } from '../../utils/content/recruitment';
import { reviewsVideosData } from '../../utils/content/reviews-videos';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [InfoCardComponent, ProductCardComponent, SafePipe],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.css'
})
export class ServicesViewComponent {
  trainingData = trainingData;
  recruitmentData = recruitmentData;
  reviewsVideosData = reviewsVideosData;
  videosLimit: number = 4;
}

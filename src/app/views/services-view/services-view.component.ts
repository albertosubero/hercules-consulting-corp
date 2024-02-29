import { Component } from '@angular/core';
import { InfoCardComponent, articleI } from '../../components/info-card/info-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { trainingData } from '../../utils/content/training';
import { recruitmentData } from '../../utils/content/recruitment';
import { reviewsVideosData } from '../../utils/content/reviews-videos';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpNumbersDirective } from '../../utils/directives/count-up-numbers.directive';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [InfoCardComponent, ProductCardComponent, SafePipe, TranslateModule, CountUpNumbersDirective],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.css'
})
export class ServicesViewComponent {
  trainingData = trainingData;
  recruitmentData = recruitmentData;
  reviewsVideosData = reviewsVideosData;
  videosLimit: number = 4;
}

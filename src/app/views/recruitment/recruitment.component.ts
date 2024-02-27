import { Component } from '@angular/core';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { recruitmentData } from '../../utils/content/recruitment';
import { reviewsVideosData } from '../../utils/content/reviews-videos';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [InfoCardComponent, SafePipe, TranslateModule],
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.css'
})
export class RecruitmentComponent {
  recruitmentData = recruitmentData;
  reviewsVideosData = reviewsVideosData;
  videosLimit: number = 4;
}

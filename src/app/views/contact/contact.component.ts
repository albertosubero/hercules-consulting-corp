import { Component } from '@angular/core';
import { reviewsVideosData } from '../../utils/content/reviews-videos';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SafePipe, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  reviewsVideosData = reviewsVideosData;
  videosLimit: number = 4;
}

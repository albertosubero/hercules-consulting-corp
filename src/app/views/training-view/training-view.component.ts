import { Component } from '@angular/core';
import { trainingData } from '../../utils/content/training';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-training-view',
  standalone: true,
  imports: [InfoCardComponent, TranslateModule],
  templateUrl: './training-view.component.html',
  styleUrl: './training-view.component.css'
})
export class TrainingViewComponent {
  trainingData = trainingData;

}

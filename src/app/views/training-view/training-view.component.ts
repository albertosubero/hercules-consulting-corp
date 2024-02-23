import { Component } from '@angular/core';
import { trainingData } from '../../utils/content/training';
import { InfoCardComponent } from '../../components/info-card/info-card.component';

@Component({
  selector: 'app-training-view',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './training-view.component.html',
  styleUrl: './training-view.component.css'
})
export class TrainingViewComponent {
  trainingData = trainingData;

}

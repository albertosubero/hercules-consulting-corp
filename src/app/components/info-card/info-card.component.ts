import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface articleI {
  'id': number;
  'title': string;
  'content': string;
  'img': string;
  'url': string;
}

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() data: articleI[] = [];
}

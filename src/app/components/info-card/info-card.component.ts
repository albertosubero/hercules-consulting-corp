import { Component, Input } from '@angular/core';

export interface articleI {
  'id': Number;
  'title': String;
  'content': String;
  'img': String;
  'url': String;
}

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() data: articleI[] = [];
}

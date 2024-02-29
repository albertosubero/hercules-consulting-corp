import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpNumbersDirective } from '../../utils/directives/count-up-numbers.directive';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [TranslateModule, CountUpNumbersDirective],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}

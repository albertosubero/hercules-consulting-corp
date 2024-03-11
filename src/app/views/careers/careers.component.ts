import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpNumbersDirective } from '../../utils/directives/count-up-numbers.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [TranslateModule, RouterModule, CountUpNumbersDirective],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}

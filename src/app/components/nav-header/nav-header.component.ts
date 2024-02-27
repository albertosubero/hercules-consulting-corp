import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  mobileMenuIsOpen: boolean = false;
}

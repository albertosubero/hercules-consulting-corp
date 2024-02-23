import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  mobileMenuIsOpen: boolean = false;
}

import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ServicesViewComponent } from './views/services-view/services-view.component';

export const routes: Routes = [
  { path: '', title:"Home Page", component: HomeViewComponent },
  { path: 'services', title:"Services Page", component: ServicesViewComponent },
];

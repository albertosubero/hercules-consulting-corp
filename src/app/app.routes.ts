import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ServicesViewComponent } from './views/services-view/services-view.component';
import { TrainingViewComponent } from './views/training-view/training-view.component';
import { RecruitmentComponent } from './views/recruitment/recruitment.component';
import { AboutUsComponent } from './views/about-us/about-us.component';

export const routes: Routes = [
  { path: '', title:"Home Page", component: HomeViewComponent },
  { path: 'services', title:"Services Page", component: ServicesViewComponent },
  { path: 'training', title: "Training Page", component: TrainingViewComponent },
  { path: 'recruitment', title: "Recruitment Page", component: RecruitmentComponent },
  { path: 'about-us', title: "About us Page", component: AboutUsComponent }
];

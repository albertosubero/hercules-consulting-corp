import { Component } from '@angular/core';
import { InfoCardComponent, articleI } from '../../components/info-card/info-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SafePipe } from '../../utils/pipes/safe.pipe';
import { trainingData } from '../../utils/content/training';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [InfoCardComponent, ProductCardComponent, SafePipe],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.css'
})
export class ServicesViewComponent {
  trainingData = trainingData;
  
  recruitmentData: articleI[] = [
    {
      id: 1,
      title: 'Servicios',
      content: 'En el mundo empresarial,cada nuevo miembro del equipo es una inversión estratégica. En HERCULES , ofrecemosservicios de reclutamiento que van más...',
      img: 'image-recruitment-card-001.png',
      url: ''
    },
    {
      id: 2,
      title: 'Proceso Especializado',
      content: 'Nuestro proceso dereclutamiento especializado se centra en comprender las necesidades únicas detu empresa. Desde la creación de perfiles de trabajo...',
      img: 'image-recruitment-card-002.png',
      url: ''
    },
    {
      id: 3,
      title: 'Éxitos en Reclutamiento',
      content: 'Nos enorgullecenuestro historial de éxito en la colocación de profesionales altamentecalificados en roles clave. Hemos contribuido al crecimiento y éxito dediversas...',
      img: 'image-recruitment-card-003.png',
      url: ''
    }
  ]

  reviewsVideosData = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/FUSO2wHlIiA?si=lnBO2MlQHtHvDc2_'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/FUSO2wHlIiA?si=lnBO2MlQHtHvDc2_'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/FUSO2wHlIiA?si=lnBO2MlQHtHvDc2_'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/FUSO2wHlIiA?si=lnBO2MlQHtHvDc2_'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/FUSO2wHlIiA?si=lnBO2MlQHtHvDc2_'
    }
  ]

  videosLimit: number = 4
}

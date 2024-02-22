import { Component } from '@angular/core';
import { InfoCardComponent, articleI } from '../../components/info-card/info-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SafePipe } from '../../utils/pipes/safe.pipe';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [InfoCardComponent, ProductCardComponent, SafePipe],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.css'
})
export class ServicesViewComponent {
  trainingData: articleI[] = [
    {
      id: 1,
      title: 'Presentación',
      content: 'Bienvenido a nuestra sección de Formación, donde la excelencia y el desarrollo de habilidades convergen para impulsar el éxito de tu equipo y empresa...',
      img: 'image-info-card-001.png',
      url: ''
    },
    {
      id: 2,
      title: 'Especialización',
      content: 'Desde liderazgo hastahabilidades técnicas especializadas, nuestros programas de formación estándiseñados para adaptarse a las necesidades específicas...',
      img: 'image-info-card-002.png',
      url: ''
    },
    {
      id: 3,
      title: 'Casos de Éxito',
      content: 'Nuestros casos deéxito son testimonios tangibles de cómo la formación personalizada hatransformado empresas como la tuya...',
      img: 'image-info-card-003.png',
      url: ''
    }
  ]

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

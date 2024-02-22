import { Component } from '@angular/core';
import { InfoCardComponent, articleI } from '../../components/info-card/info-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [InfoCardComponent, ProductCardComponent],
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
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo: any;
  profileImage = 'assets/images/img_portafolio.jpg';
  
  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  // Método para manejar el error de imagen
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/img_portafolio.jpg';
      console.warn('Error cargando la imagen de perfil, usando imagen por defecto');
    }
  }
}
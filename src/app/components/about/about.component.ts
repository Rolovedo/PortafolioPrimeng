import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

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
  personalInfo = {
    name: 'Samuel Acevedo',
    title: 'Desarrollador de Software - Deportista',
    description: 'Hola, soy Samuel Acevedo, un apasionado por el fútbol y el desarrollo de software. Me encanta crear proyectos innovadores y mejorar mis habilidades constantemente, tanto físicas como intelectuales.',
    email: 's.acevedo4@utp.edu.co',
    profileImage: 'assets/images/img_portafolio.jpg'
  };

  profileImage = this.personalInfo.profileImage;

  ngOnInit(): void {
    // Ya no se necesita obtener los datos desde un servicio
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

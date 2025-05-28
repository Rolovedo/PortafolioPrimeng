import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
//Imortaciones del carrusel
import { CarouselModule } from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button'; 

interface Achievement {
  type: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}
/*
interface AchievementImage {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
}*/

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CardModule, 
    TimelineModule, TagModule,
  CarouselModule, ButtonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})

export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      type: 'sports',
      category: 'Deportivos',
      description: 'Subcampeón Copa Ciudad Pereira 2024. Dos veces campeón de LAF (Liga Antioqueña de Fútbol).',
      icon: 'pi pi-trophy',
      color: '#FF0000',
      tags: ['Fútbol', 'Competencia', 'Logro']
    },
    {
      type: 'work',
      category: 'Laborales', 
      description: 'Trabajo colaborativo con la empresa de transporte GruasMotoX. Experiencia en manejo de redes sociales con Paracoser.',
      icon: 'pi pi-briefcase',
      color: '#4CAF50',
      tags: ['Colaboración', 'Redes Sociales', 'Transporte']
    },
    {
      type: 'academic',
      category: 'Académicos',
      description: 'Cursos certificados en Excel, Python, Java. Inglés certificado B1.',
      icon: 'pi pi-book',
      color: '#2196F3',
      tags: ['Certificaciones', 'Programación', 'Idiomas']
    }
  ];
/*
    achievementImages: AchievementImage[] = [
    {
      id: 1,
      title: 'Copa Ciudad Pereira 2024',
      description: 'Subcampeonato en torneo local',
      image: 'assets/images/img_portafolio.jpg',
      category: 'Deportivo',
      status: 'DESTACADO'
    }, 
    {
      id: 2,
      title: 'Certificado Python',
      description: 'Curso de Python completado',
      image: 'assets/images/portafolio.png',
      category: 'Académico',
      status: 'CERTIFICADO'
    }
  ];
  

    getSeverity(status: string): "success" | "info" | "secondary" | undefined {
    switch (status) {
      case 'DESTACADO':
        return 'success';
      case 'CERTIFICADO':
        return 'info';
      default:
        return 'secondary';
    }
  }*/
}
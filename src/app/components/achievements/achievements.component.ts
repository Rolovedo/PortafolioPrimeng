import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
// Importaciones del carrusel
import { CarouselModule } from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button'; 

// interfaz para representar un logro
interface Achievement {
  type: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

// interfaz para representar una imagen de logro
interface AchievementImage {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
}

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
  // lista de logros con su informacion detallada
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

  // lista de imagenes asociadas a logros
  achievementImages: AchievementImage[] = [
    {
      id: 1,
      title: 'Copa Ciudad Pereira 2024',
      description: 'Subcampeonato en torneo local de fútbol',
      image: 'assets/images/copa-pereira.jpg',
      category: 'Deportivo',
      status: 'DESTACADO'
    }, 
    {
      id: 2,
      title: 'Certificado Python',
      description: 'Curso completo de programación en Python',
      image: 'assets/images/cert-python.jpg',
      category: 'Académico',
      status: 'CERTIFICADO'
    }
  ];

  // metodo que devuelve el color de la etiqueta segun el estado
  getSeverity(status: string): "success" | "info" | "secondary" | undefined {
    switch (status) {
      case 'DESTACADO':
        return 'success';
      case 'CERTIFICADO':
        return 'info';
      default:
        return 'secondary';
    }
  }
}
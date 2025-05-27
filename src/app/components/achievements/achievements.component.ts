import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';

interface Achievement {
  type: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule, TagModule],
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
}
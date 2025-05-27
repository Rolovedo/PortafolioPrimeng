import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.experiences = [
      {
        title: 'Desarrollador Web',
        company: 'GruasMotoX',
        description: 'Desarrollo de página web corporativa y manejo de bases de datos. Experiencia en análisis de datos mediante Excel.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        startDate: new Date('2023-01-01')
      },
      {
        title: 'Community Manager',
        company: 'Paracoser',
        description: 'Manejo de redes sociales y creación de contenido digital.',
        technologies: ['Social Media', 'Content Creation', 'Analytics'],
        startDate: new Date('2022-06-01'),
        endDate: new Date('2023-12-31')
      }
    ];
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  isCurrentJob(experience: Experience): boolean {
    return !experience.endDate;
  }
}

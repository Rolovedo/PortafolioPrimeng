import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

// define la estructura de una experiencia laboral
interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
}

// define el componente de experiencia
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
  // lista de experiencias laborales
  experiences: Experience[] = [];

  // inicializa el componente cargando datos simulados
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

  // devuelve una fecha en formato legible en español
  formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long' 
    });
  }

  // determina si una experiencia es el trabajo actual
  isCurrentJob(experience: Experience): boolean {
    return !experience.endDate;
  }
}

import { Injectable } from '@angular/core';

export interface Achievement {
  id: string;
  type: 'sports' | 'work' | 'academic';
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  startDate: Date;
  endDate?: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getPersonalInfo() {
    return {
      name: 'Samuel Acevedo',
      title: 'Desarrollador de Software',
      description: 'Hola, soy Samuel Acevedo, un apasionado por el fútbol y el desarrollo de software. Me encanta crear proyectos innovadores y mejorar mis habilidades constantemente, tanto físicas como intelectuales.',
      email: 's.acevedo4@utp.edu.co',
      profileImage: 'assets/images/img_portafolio.jpg' // Agrega tu foto aquí
    };
  }

  getAchievements(): Achievement[] {
    return [
      {
        id: '1',
        type: 'sports',
        title: 'Deportivos',
        description: 'Subcampeón Copa Ciudad Pereira 2024. Dos veces campeón de LAF (Liga Antioqueña de Fútbol).',
        icon: 'fas fa-medal'
      },
      {
        id: '2',
        type: 'work',
        title: 'Laborales',
        description: 'Trabajo colaborativo con la empresa de transporte GruasMotoX. Experiencia en manejo de redes sociales con Paracoser.',
        icon: 'fas fa-briefcase'
      },
      {
        id: '3',
        type: 'academic',
        title: 'Académicos',
        description: 'Cursos certificados en Excel, Python, Java. Inglés certificado B1.',
        icon: 'fas fa-graduation-cap'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'JavaScript', level: 85, category: 'frontend' },
      { name: 'Python', level: 75, category: 'backend' },
      { name: 'C y C++', level: 70, category: 'backend' },
      { name: 'CSS', level: 80, category: 'frontend' },
      { name: 'PHP', level: 65, category: 'backend' },
      { name: 'SQL', level: 75, category: 'database' },
      { name: 'HTML', level: 90, category: 'frontend' },
      { name: 'Angular', level: 80, category: 'frontend' },
      { name: 'TypeScript', level: 75, category: 'frontend' }
    ];
  }

  getExperiences(): Experience[] {
    return [
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

  getSocialLinks(): SocialLink[] {
    return [
      {
        platform: 'Instagram',
        url: 'https://instagram.com/tu_usuario',
        icon: 'fab fa-instagram',
        color: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
      },
      {
        platform: 'Facebook',
        url: 'https://facebook.com/tu_usuario',
        icon: 'fab fa-facebook-f',
        color: '#1877f2'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/tu_usuario',
        icon: 'fab fa-github',
        color: '#333'
      },
      {
        platform: 'TikTok',
        url: 'https://tiktok.com/@tu_usuario',
        icon: 'fab fa-tiktok',
        color: 'linear-gradient(45deg, #ff0050, #00f2ea)'
      }
    ];
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

interface Achievement {
  category: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule],
  template: `
    <div class="achievements-container">
      <p-card header="Logros" class="achievements-card">
        <p-timeline [value]="achievements" align="alternate">
          <ng-template pTemplate="content" let-achievement>
            <div class="achievement-item">
              <i [class]="achievement.icon" [style.color]="achievement.color"></i>
              <div class="achievement-content">
                <h4>{{ achievement.category }}</h4>
                <p>{{ achievement.description }}</p>
              </div>
            </div>
          </ng-template>
        </p-timeline>
      </p-card>
    </div>
  `,
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      category: 'Deportivos',
      description: 'Subcampeón Copa Ciudad Pereira 2024. Dos veces campeón de LAF (Liga Antioqueña de Fútbol).',
      icon: 'pi pi-trophy',
      color: '#FFD700'
    },
    {
      category: 'Laborales', 
      description: 'Trabajo colaborativo con la empresa de transporte GruasMotoX. Experiencia en manejo de redes sociales con Paracoser.',
      icon: 'pi pi-briefcase',
      color: '#4CAF50'
    },
    {
      category: 'Académicos',
      description: 'Cursos certificados en Excel, Python, Java. Inglés certificado B1.',
      icon: 'pi pi-book',
      color: '#2196F3'
    }
  ];
}
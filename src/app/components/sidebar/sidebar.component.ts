import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, InputTextModule],
  template: `
    <div class="sidebar">
      <div class="search-section">
        <input 
          type="text" 
          pInputText 
          placeholder="Buscar..." 
          class="search-input">
      </div>
      
      <p-card header="Lenguajes usados en la carrera" class="skills-card">
        <div class="skills-list">
          <p-chip 
            *ngFor="let skill of skills" 
            [label]="skill" 
            icon="pi pi-check"
            class="skill-chip">
          </p-chip>
        </div>
      </p-card>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  skills = [
    'JavaScript',
    'Python',
    'C y C++',
    'CSS',
    'PHP',
    'SQL',
    'HTML'
  ];
}
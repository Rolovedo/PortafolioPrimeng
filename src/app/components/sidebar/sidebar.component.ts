import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  skillsData: any;
  
  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    // Aquí puedes obtener los datos de habilidades del servicio
    // o definirlos directamente como están ahora
    this.skillsData = this.getSkillsData();
  }

  private getSkillsData() {
    return {
      frontend: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'],
      backend: ['Python', 'PHP', 'C/C++', 'Java'],
      database: ['SQL', 'MySQL', 'Excel']
    };
  }
}
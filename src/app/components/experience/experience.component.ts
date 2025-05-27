import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PortfolioDataService, Experience } from '../../services/portfolio-data.service';

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
  
  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
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
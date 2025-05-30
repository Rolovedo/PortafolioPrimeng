import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

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
  
  ngOnInit(): void {
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
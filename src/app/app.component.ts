import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from "./components/about/about.component";
import { AchievementsComponent } from "./components/achievements/achievements.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    AchievementsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portafolio-angular4';

  ngOnInit(): void {
  }
}

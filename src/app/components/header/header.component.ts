import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CustomThemeService } from '../../services/custom-theme.service'; // ✅ Correcto
import { Subscription } from 'rxjs';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  private themeSubscription?: Subscription;
  
  navItems: NavItem[] = [
    { label: 'Principal', route: '/about', icon: 'fas fa-user' },
    { label: 'Experiencia', route: '/experience', icon: 'fas fa-briefcase' },
    { label: 'Logros', route: '/achievements', icon: 'fas fa-trophy' },
    { label: 'Contacto', route: '/contact', icon: 'fas fa-envelope' }
  ];

  constructor(
    private router: Router,
    private themeService: CustomThemeService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.darkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
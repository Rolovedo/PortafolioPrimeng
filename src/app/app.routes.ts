import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'logros', 
    loadComponent: () => import('./components/achievements/achievements.component').then(m => m.AchievementsComponent)
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '/about' }
];
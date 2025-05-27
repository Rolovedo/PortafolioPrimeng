import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$ = this.darkModeSubject.asObservable();

constructor() {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme) {
      this.setDarkMode(JSON.parse(savedTheme));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
  }
}


  toggleDarkMode(): void {
    const currentMode = this.darkModeSubject.value;
    this.setDarkMode(!currentMode);
  }

  setDarkMode(isDark: boolean): void {
    this.darkModeSubject.next(isDark);
    localStorage.setItem('dark-mode', JSON.stringify(isDark));
    
    // Aplicar clase al body
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
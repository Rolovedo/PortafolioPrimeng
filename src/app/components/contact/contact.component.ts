import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

interface ContactMethod {
  type: string;
  value: string;
  icon: string;
  color: string;
  action: () => void;
}

interface SocialLink {
  platform: string;
  icon: string;
  color: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DividerModule],
  template: `
    <div class="contact-section">
      <div class="section-header">
        <h2 class="section-title">
          <i class="pi pi-envelope"></i>
          Contacto
        </h2>
        <div class="section-stats">
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">Redes</span>
          </div>
        </div>
      </div>

      <div class="contact-grid">
        <!-- Información de contacto principal -->
        <div class="contact-info-card">
          <h3 class="card-title">Información de Contacto</h3>
          <div class="contact-methods">
            <div 
              *ngFor="let method of contactMethods" 
              class="contact-method"
              (click)="method.action()">
              <div class="method-icon" [style.background-color]="method.color">
                <i [class]="method.icon"></i>
              </div>
              <div class="method-content">
                <span class="method-type">{{ method.type }}</span>
                <span class="method-value">{{ method.value }}</span>
              </div>
              <i class="pi pi-external-link method-arrow"></i>
            </div>
          </div>
        </div>

        <!-- Redes sociales -->
        <div class="social-media-card">
          <h3 class="card-title">Sígueme en Redes Sociales</h3>
          <p class="card-description">
            Mantente al día con mis proyectos y actualizaciones profesionales
          </p>
          
          <div class="social-grid">
            <div 
              *ngFor="let social of socialLinks" 
              class="social-item"
              (click)="openSocialLink(social.url)">
              <div class="social-icon" [style.background-color]="social.color">
                <i [class]="social.icon"></i>
              </div>
              <span class="social-name">{{ social.platform }}</span>
            </div>
          </div>
        </div>

        <!-- Disponibilidad -->
        <div class="availability-card">
          <h3 class="card-title">Disponibilidad</h3>
          <div class="availability-status">
            <div class="status-indicator active"></div>
            <span class="status-text">Disponible para nuevos proyectos</span>
          </div>
          <p class="availability-description">
            Abierto a oportunidades laborales y colaboraciones interesantes.
            Tiempo de respuesta: 24-48 horas.
          </p>
          <p-button 
            label="Enviar Email" 
            icon="pi pi-send"
            class="contact-button"
            (onClick)="sendEmail()">
          </p-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    {
      type: 'Email',
      value: 's.acevedo4@utp.edu.co',
      icon: 'pi pi-envelope',
      color: '#3498db',
      action: () => this.sendEmail()
    },
    {
      type: 'Teléfono',
      value: '+57 300 123 4567',
      icon: 'pi pi-phone',
      color: '#2ecc71',
      action: () => this.callPhone()
    },
    {
      type: 'Ubicación',
      value: 'Pereira, Risaralda',
      icon: 'pi pi-map-marker',
      color: '#e74c3c',
      action: () => this.openLocation()
    }
  ];

  socialLinks: SocialLink[] = [
    {
      platform: 'Instagram',
      icon: 'pi pi-instagram',
      color: '#E4405F',
      url: 'https://instagram.com'
    },
    {
      platform: 'Facebook',
      icon: 'pi pi-facebook',
      color: '#1877F2',
      url: 'https://facebook.com'
    },
    {
      platform: 'GitHub',
      icon: 'pi pi-github',
      color: '#333333',
      url: 'https://github.com'
    },
    {
      platform: 'TikTok',
      icon: 'pi pi-video',
      color: '#FF0050',
      url: 'https://tiktok.com'
    }
  ];

  sendEmail() {
    window.location.href = 'mailto:s.acevedo4@utp.edu.co?subject=Contacto Profesional';
  }

  callPhone() {
    window.location.href = 'tel:+573001234567';
  }

  openLocation() {
    window.open('https://maps.google.com/?q=Pereira,Risaralda,Colombia', '_blank');
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
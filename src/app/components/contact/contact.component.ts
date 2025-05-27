import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="contact-container">
      <p-card header="Contacto" class="contact-card">
        <div class="contact-content">
          <p>Puedes contactarme en 
            <a href="mailto:s.acevedo4@utp.edu.co" class="email-link">
              s.acevedo4&#64;utp.edu.co
            </a> 
            o seguirme en mis redes sociales.
          </p>
          
          <div class="social-links">
            <p-button 
              icon="pi pi-instagram" 
              [rounded]="true" 
              severity="danger"
              (onClick)="openSocialLink('instagram')">
            </p-button>
            <p-button 
              icon="pi pi-facebook" 
              [rounded]="true" 
              severity="info"
              (onClick)="openSocialLink('facebook')">
            </p-button>
            <p-button 
              icon="pi pi-github" 
              [rounded]="true" 
              severity="secondary"
              (onClick)="openSocialLink('github')">
            </p-button>
            <p-button 
              icon="pi pi-video" 
              [rounded]="true" 
              severity="help"
              (onClick)="openSocialLink('tiktok')">
            </p-button>
          </div>
        </div>
      </p-card>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  openSocialLink(platform: string) {
    const links = {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      github: 'https://github.com',
      tiktok: 'https://tiktok.com'
    };
    window.open(links[platform as keyof typeof links], '_blank');
  }
}
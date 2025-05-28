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
  templateUrl: './contact.component.html',
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
      value: '+57 314 848 47 94',
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
      url: 'https://www.instagram.com/ace.__.sam/'
    },
    {
      platform: 'Facebook',
      icon: 'pi pi-facebook',
      color: '#1877F2',
      url: 'https://www.facebook.com/samuel.acevedogomez/'
    },
    {
      platform: 'GitHub',
      icon: 'pi pi-github',
      color: '#333333',
      url: 'https://github.com/Rolovedo'
    },
    {
      platform: 'TikTok',
      icon: 'pi pi-tiktok',
      color: '#050002',
      url: 'https://www.tiktok.com/@sam_ace04'
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
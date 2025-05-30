import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

// define la estructura de un metodo de contacto
interface ContactMethod {
  type: string;
  value: string;
  icon: string;
  color: string;
  action: () => void;
}

// define la estructura de un enlace social
interface SocialLink {
  platform: string;
  icon: string;
  color: string;
  url: string;
}

// declara el componente contact como standalone y especifica sus dependencias
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DividerModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // lista de metodos de contacto disponibles
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
      value: '+57 333 75 58',
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

  // lista de redes sociales disponibles
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

  // abre el cliente de correo con el email predefinido
  sendEmail() {
    window.location.href = 'mailto:s.acevedo4@utp.edu.co?subject=Contacto Profesional';
  }

  // le da la opcion de elegir al usuario donde usar el telefono
  callPhone() {
    window.location.href = 'tel:+5733333333';
  }

  // abre ubicacion en google maps en una nueva pestaña
  openLocation() {
    window.open('https://maps.google.com/?q=Pereira,Risaralda,Colombia', '_blank');
  }

  // abre enlace de red social en una nueva pestaña
  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
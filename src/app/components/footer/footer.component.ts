import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" role="contentinfo">
      <div class="container">

        <div class="footer__grid">

          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer-logo">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="18" fill="#4CAF50"/>
                <path d="M9 26 C9 26 11.5 16 18 16 C24.5 16 27 26 27 26"
                      stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <circle cx="18" cy="11" r="3.5" fill="white"/>
              </svg>
              <span class="footer-logo-text">
                Mind<span>&amp;Body</span><sup>TM</sup>
              </span>
            </div>
            <p class="footer__tagline">
              Democratizando el bienestar en la educación superior mediante tecnología e inteligencia artificial.
            </p>
            <div class="footer__social" aria-label="Redes sociales">
              @for (social of socials; track social.name) {
                <a [href]="social.href" [attr.aria-label]="social.name" class="social-link" target="_blank" rel="noopener noreferrer">
                  {{ social.icon }}
                </a>
              }
            </div>
          </div>

          <!-- Links -->
          @for (group of linkGroups; track group.title) {
            <nav class="footer__links" [attr.aria-label]="group.title">
              <h3 class="footer__links-title">{{ group.title }}</h3>
              <ul>
                @for (link of group.links; track link.label) {
                  <li>
                    <a [href]="link.href" class="footer-link">{{ link.label }}</a>
                  </li>
                }
              </ul>
            </nav>
          }

          <!-- Contact -->
          <div class="footer__contact">
            <h3 class="footer__links-title">Contacto</h3>
            <div class="contact-items">
              @for (item of contactItems; track item.label) {
                <div class="contact-item">
                  <span class="contact-icon" aria-hidden="true">{{ item.icon }}</span>
                  <div>
                    <div class="contact-label">{{ item.label }}</div>
                    <div class="contact-value">{{ item.value }}</div>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; 2026 Mind&amp;Body TM. Todos los derechos reservados.
          </p>
          <div class="footer__legal">
            <a href="#" class="footer-link-sm">Política de Privacidad</a>
            <span aria-hidden="true">·</span>
            <a href="#" class="footer-link-sm">Términos de Uso</a>
            <span aria-hidden="true">·</span>
            <a href="#" class="footer-link-sm">Accesibilidad</a>
          </div>
          <p class="footer__credits">
            Desarrollado por Equipo 1ACC0236-202610 · UPC 2026
          </p>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--color-primary-dark);
      color: var(--color-white);
      padding-top: var(--space-16);
    }

    .footer__grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: var(--space-12);
      padding-bottom: var(--space-12);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    /* Brand */
    .footer-logo {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .footer-logo-text {
      font-family: var(--font-heading);
      font-size: var(--text-xl);
      font-weight: var(--fw-bold);
      color: var(--color-white);
    }

    .footer-logo-text span { color: var(--color-primary-pale); }
    .footer-logo-text sup { font-size: 0.55em; color: var(--color-primary-pale); vertical-align: super; }

    .footer__tagline {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.65);
      line-height: 1.7;
      margin-bottom: var(--space-6);
      max-width: 300px;
    }

    .footer__social {
      display: flex;
      gap: var(--space-3);
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: all var(--transition-fast);
    }

    .social-link:hover {
      background: var(--color-primary-light);
      border-color: var(--color-primary-light);
    }

    /* Links */
    .footer__links-title {
      font-family: var(--font-heading);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      color: var(--color-primary-pale);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: var(--space-5);
    }

    .footer__links ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .footer-link {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.65);
      transition: color var(--transition-fast);
    }

    .footer-link:hover { color: var(--color-white); }

    /* Contact */
    .contact-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .contact-icon {
      font-size: 1.1rem;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .contact-label {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }

    .contact-value {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.8);
    }

    /* Bottom */
    .footer__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--space-4);
      padding: var(--space-6) 0;
    }

    .footer__copyright {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.5);
    }

    .footer__legal {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.4);
    }

    .footer-link-sm {
      color: rgba(255,255,255,0.6);
      transition: color var(--transition-fast);
    }

    .footer-link-sm:hover { color: var(--color-white); }

    .footer__credits {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.35);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .footer__grid { grid-template-columns: 1fr 1fr; }
      .footer__brand { grid-column: 1 / -1; }
    }

    @media (max-width: 640px) {
      .footer__grid { grid-template-columns: 1fr; gap: var(--space-8); }

      .footer__bottom {
        flex-direction: column;
        text-align: center;
        gap: var(--space-3);
      }
    }
  `]
})
export class FooterComponent {
  socials = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter/X', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'GitHub', href: 'https://github.com', icon: '💻' },
  ];

  linkGroups = [
    {
      title: 'Plataforma',
      links: [
        { label: 'Características', href: '#explorar' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Precios', href: '#' },
        { label: 'Integraciones', href: '#' },
        { label: 'Roadmap', href: '#' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Prensa', href: '#' },
        { label: 'Carreras', href: '#' },
        { label: 'Soporte', href: '#' },
      ]
    }
  ];

  contactItems = [
    { icon: '✉️', label: 'Email', value: 'hola@mindbody.pe' },
    { icon: '📍', label: 'Sede', value: 'Lima, Perú' },
    { icon: '📞', label: 'Teléfono', value: '+51 1 234 5678' },
    { icon: '🕒', label: 'Horario', value: 'Lun–Vie, 9am–6pm' },
  ];
}

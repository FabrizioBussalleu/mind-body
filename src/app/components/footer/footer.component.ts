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
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="18" r="18" fill="#4CAF50"/>
                <path d="M9 26 C9 26 11.5 16 18 16 C24.5 16 27 26 27 26"
                      stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <circle cx="18" cy="11" r="3.5" fill="white"/>
              </svg>
              <span class="footer-logo-text">
                Mind<span class="logo-accent">&amp;Body</span><sup>TM</sup>
              </span>
            </div>
            <p class="footer__tagline">
              Democratizando el bienestar en la educación superior mediante tecnología e inteligencia artificial.
            </p>
            <div class="footer__social" aria-label="Redes sociales">
              @for (social of socials; track social.name) {
                <a [href]="social.href" [attr.aria-label]="social.name"
                   class="social-link" target="_blank" rel="noopener noreferrer">
                  <span [innerHTML]="social.iconSvg"></span>
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
                  <li><a [href]="link.href" class="footer-link">{{ link.label }}</a></li>
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
                  <span class="contact-icon" aria-hidden="true" [innerHTML]="item.iconSvg"></span>
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
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

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

    .logo-accent { color: var(--color-primary-pale); }
    .footer-logo-text sup { font-size: 0.55em; color: var(--color-primary-pale); vertical-align: super; }

    .footer__tagline {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.55);
      line-height: 1.75;
      margin-bottom: var(--space-6);
      max-width: 290px;
    }

    .footer__social {
      display: flex;
      gap: var(--space-2);
    }

    .social-link {
      width: 38px;
      height: 38px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.65);
      transition: all var(--transition-fast);
    }

    .social-link:hover {
      background: var(--color-primary-light);
      border-color: var(--color-primary-light);
      color: var(--color-white);
    }

    .footer__links-title {
      font-family: var(--font-heading);
      font-size: var(--text-xs);
      font-weight: var(--fw-semibold);
      color: var(--color-primary-pale);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-5);
    }

    .footer__links ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .footer-link {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.55);
      transition: color var(--transition-fast);
    }

    .footer-link:hover { color: var(--color-white); }

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
      display: flex;
      align-items: center;
      color: var(--color-primary-pale);
      margin-top: 2px;
      flex-shrink: 0;
    }

    .contact-label {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 2px;
    }

    .contact-value {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.75);
    }

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
      color: rgba(255,255,255,0.4);
    }

    .footer__legal {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.35);
    }

    .footer-link-sm {
      color: rgba(255,255,255,0.5);
      transition: color var(--transition-fast);
    }

    .footer-link-sm:hover { color: var(--color-white); }

    .footer__credits {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.3);
    }

    @media (max-width: 1024px) {
      .footer__grid { grid-template-columns: 1fr 1fr; }
      .footer__brand { grid-column: 1 / -1; }
    }

    @media (max-width: 640px) {
      .footer__grid { grid-template-columns: 1fr; gap: var(--space-8); }
      .footer__bottom { flex-direction: column; text-align: center; gap: var(--space-3); }
    }
  `]
})
export class FooterComponent {
  socials = [
    {
      name: 'LinkedIn',
      href: '#',
      iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    },
    {
      name: 'Twitter / X',
      href: '#',
      iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      name: 'Instagram',
      href: '#',
      iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
  ];

  linkGroups = [
    {
      title: 'Plataforma',
      links: [
        { label: 'Características',  href: '#explorar' },
        { label: 'Cómo funciona',    href: '#como-funciona' },
        { label: 'Precios',          href: '#' },
        { label: 'Integraciones',    href: '#' },
        { label: 'Roadmap',          href: '#' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Blog',           href: '#' },
        { label: 'Prensa',         href: '#' },
        { label: 'Carreras',       href: '#' },
        { label: 'Soporte',        href: '#' },
      ]
    }
  ];

  contactItems = [
    {
      label: 'Email',
      value: 'hola@mindbody.pe',
      iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    },
    {
      label: 'Sede',
      value: 'Lima, Perú',
      iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    },
    {
      label: 'Teléfono',
      value: '+51 1 234 5678',
      iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
    },
    {
      label: 'Horario',
      value: 'Lun–Vie, 9am–6pm',
      iconSvg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
  ];
}

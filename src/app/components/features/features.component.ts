import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Feature {
  iconSvg: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  bg: string;
}

const ICONS = {
  sparkle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.88 5.76a2 2 0 0 0 1.24 1.24L21 12l-5.88 1.88a2 2 0 0 0-1.24 1.24L12 21l-1.88-5.88a2 2 0 0 0-1.24-1.24L3 12l5.88-1.88a2 2 0 0 0 1.24-1.24L12 3z"/></svg>`,
  calendar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  calGrid: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
  trophy: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  chart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/></svg>`,
  trending: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  building: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15"/><path d="M16 22V11h-5v11M2 7l10-5 10 5"/></svg>`,
  checkSquare: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  fileText: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  settings: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  qr: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v.01M14 21h.01M17 21h4v-4M21 17v.01"/></svg>`,
  search: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  clock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
};

const TAB_ICONS = {
  students: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  institutions: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15"/><path d="M16 22V11h-5v11M2 7l10-5 10 5"/></svg>`,
};

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features section" id="explorar" aria-labelledby="features-heading">
      <div class="container">

        <div class="features__header text-center">
          <h2 class="section-title" id="features-heading">
            Todo lo que necesitas para gestionar<br>
            el bienestar universitario
          </h2>
          <p class="section-subtitle">
            Una plataforma completa que conecta instituciones con estudiantes,
            optimizando recursos y fomentando el hábito deportivo.
          </p>
        </div>

        <div class="features__tabs" role="tablist" aria-label="Segmentos">
          @for (tab of tabs; track tab.id) {
            <button
              class="tab-btn"
              [class.active]="activeTab === tab.id"
              (click)="setTab(tab.id)"
              role="tab"
              [attr.aria-selected]="activeTab === tab.id"
            >
              <span class="tab-icon" [innerHTML]="safe(tab.iconSvg)"></span>
              {{ tab.label }}
            </button>
          }
        </div>

        <div class="features__grid" role="tabpanel">
          @for (feature of currentFeatures; track feature.title) {
            <article class="feature-card">
              <div class="feature-card__icon" [style.background]="feature.bg" [style.color]="feature.color">
                <span [innerHTML]="safe(feature.iconSvg)"></span>
              </div>
              <div class="feature-card__tag" [style.color]="feature.color">{{ feature.tag }}</div>
              <h3 class="feature-card__title">{{ feature.title }}</h3>
              <p class="feature-card__desc">{{ feature.description }}</p>
              <div class="feature-card__line" [style.background]="feature.color"></div>
            </article>
          }
        </div>

        <div class="features__highlight">
          <div class="highlight-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3l1.88 5.76a2 2 0 0 0 1.24 1.24L21 12l-5.88 1.88a2 2 0 0 0-1.24 1.24L12 21l-1.88-5.88a2 2 0 0 0-1.24-1.24L3 12l5.88-1.88a2 2 0 0 0 1.24-1.24L12 3z"/>
            </svg>
          </div>
          <div class="highlight-content">
            <strong>Asistente con IA (en beta)</strong>
            <p>Un asistente conversacional, impulsado por IA, ayuda a los estudiantes a buscar y reservar
            actividades según sus preferencias. Está en fase beta, con disponibilidad limitada, y seguirá mejorando.</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .features { background: var(--color-off-white); }

    .features__header { margin-bottom: var(--space-10); }

    .features__tabs {
      display: flex;
      justify-content: center;
      gap: var(--space-3);
      margin-bottom: var(--space-10);
    }

    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-full);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      color: var(--color-text-secondary);
      background: var(--color-white);
      border: 1.5px solid var(--color-border);
      transition: all var(--transition-base);
      cursor: pointer;
    }

    .tab-btn:hover {
      border-color: var(--color-primary-light);
      color: var(--color-primary);
    }

    .tab-btn.active {
      background: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
      color: var(--color-white);
      box-shadow: 0 4px 16px rgba(27,94,32,0.28);
    }

    .tab-icon {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* span injected by [innerHTML] must be flex so the SVG centres inside its box */
    .tab-icon > span,
    .feature-card__icon > span {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }

    .features__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
      margin-bottom: var(--space-12);
    }

    .feature-card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-base);
      position: relative;
      overflow: hidden;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-pale);
    }

    .feature-card__icon {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-4);
    }

    .feature-card__tag {
      font-size: var(--text-xs);
      font-weight: var(--fw-semibold);
      text-transform: uppercase;
      letter-spacing: 0.07em;
      margin-bottom: var(--space-2);
    }

    .feature-card__title {
      font-family: var(--font-heading);
      font-size: var(--text-base);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      margin-bottom: var(--space-2);
      line-height: 1.35;
    }

    .feature-card__desc {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.65;
    }

    .feature-card__line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      transition: width var(--transition-slow);
    }

    .feature-card:hover .feature-card__line { width: 100%; }

    /* Highlight */
    .features__highlight {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
      border-radius: var(--radius-xl);
      padding: var(--space-8) var(--space-10);
      display: flex;
      align-items: center;
      gap: var(--space-6);
      color: var(--color-white);
    }

    .highlight-icon-wrap {
      width: 64px;
      height: 64px;
      background: rgba(255,255,255,0.12);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #69F0AE;
    }

    .highlight-content strong {
      display: block;
      font-family: var(--font-heading);
      font-size: var(--text-xl);
      font-weight: var(--fw-bold);
      color: var(--color-primary-pale);
      margin-bottom: var(--space-2);
    }

    .highlight-content p {
      font-size: var(--text-base);
      color: rgba(255,255,255,0.78);
      line-height: 1.65;
      max-width: 640px;
    }

    @media (max-width: 1024px) {
      .features__grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .features__grid { grid-template-columns: 1fr; }
      .features__tabs { flex-direction: column; align-items: stretch; }
      .tab-btn { justify-content: center; }
      .features__highlight { flex-direction: column; text-align: center; padding: var(--space-8) var(--space-6); }
    }
  `]
})
export class FeaturesComponent {
  private sanitizer = inject(DomSanitizer);
  safe(svg: string): SafeHtml { return this.sanitizer.bypassSecurityTrustHtml(svg); }

  activeTab: 'students' | 'institutions' = 'students';

  tabs = [
    { id: 'students' as const,      iconSvg: TAB_ICONS.students,      label: 'Para Estudiantes' },
    { id: 'institutions' as const,  iconSvg: TAB_ICONS.institutions,  label: 'Para Universidades' },
  ];

  studentFeatures: Feature[] = [
    { iconSvg: ICONS.search,     title: 'Catálogo de actividades',     tag: 'Explora',                   color: '#388E3C', bg: '#E8F5E9',
      description: 'Explora las actividades deportivas de tu universidad —Yoga, Fútbol, Básquet, Natación, Gym y Tenis— con su horario, lugar y cupos disponibles.' },
    { iconSvg: ICONS.calendar,   title: 'Reserva en pocos pasos',      tag: 'Sin fricción',              color: '#1565C0', bg: '#E3F2FD',
      description: 'Elige una actividad y reserva tu lugar en segundos. El sistema valida los cupos disponibles en tiempo real para confirmar tu espacio.' },
    { iconSvg: ICONS.qr,         title: 'Código QR en cada reserva',   tag: 'Acceso',                    color: '#6A1B9A', bg: '#F3E5F5',
      description: 'Cada reserva genera un código QR único que presentas el día de la actividad para registrar tu asistencia.' },
    { iconSvg: ICONS.fileText,   title: 'Historial y cancelación',     tag: 'Control',                   color: '#E65100', bg: '#FFF3E0',
      description: 'Consulta tus reservas anteriores y cancela las que ya no necesites para liberar el cupo a otros estudiantes.' },
    { iconSvg: ICONS.sparkle,    title: 'Asistente con IA',            tag: 'Beta',                      color: '#00838F', bg: '#E0F7FA',
      description: 'Un asistente conversacional (en beta) te ayuda a buscar y reservar actividades según tus preferencias. Disponibilidad limitada.' },
    { iconSvg: ICONS.users,      title: 'Tu cuenta de estudiante',     tag: 'Registro',                  color: '#B71C1C', bg: '#FFEBEE',
      description: 'Crea tu cuenta e inicia sesión de forma segura para gestionar tus reservas desde cualquier dispositivo.' },
  ];

  institutionFeatures: Feature[] = [
    { iconSvg: ICONS.settings,     title: 'Gestión de actividades',        tag: 'Administración',            color: '#388E3C', bg: '#E8F5E9',
      description: 'Crea, edita o cancela actividades deportivas definiendo cupos, fecha, horario y lugar desde el panel de administración.' },
    { iconSvg: ICONS.checkSquare,  title: 'Control de cupos',              tag: 'Operaciones',               color: '#1565C0', bg: '#E3F2FD',
      description: 'Define la capacidad de cada actividad. El sistema valida los cupos al momento de reservar para evitar sobrecupos.' },
    { iconSvg: ICONS.qr,           title: 'Asistencia por QR',             tag: 'Asistencia',                color: '#6A1B9A', bg: '#F3E5F5',
      description: 'Escanea el código QR de cada estudiante para registrar su asistencia a la actividad de forma rápida y confiable.' },
    { iconSvg: ICONS.chart,        title: 'Resumen de asistentes',         tag: 'Seguimiento',               color: '#E65100', bg: '#FFF3E0',
      description: 'Consulta el resumen de asistentes por actividad para conocer la participación real en cada sesión.' },
    { iconSvg: ICONS.shield,       title: 'Roles y acceso seguro',         tag: 'Seguridad',                 color: '#B71C1C', bg: '#FFEBEE',
      description: 'Autenticación con roles de Estudiante y Administrador mediante JWT, para que cada quien acceda solo a lo que le corresponde.' },
    { iconSvg: ICONS.trending,     title: 'Catálogo actualizado',          tag: 'Tiempo real',               color: '#37474F', bg: '#ECEFF1',
      description: 'Los cambios que haces en las actividades se reflejan de inmediato en el catálogo que ven los estudiantes.' },
  ];

  get currentFeatures(): Feature[] {
    return this.activeTab === 'students' ? this.studentFeatures : this.institutionFeatures;
  }

  setTab(tab: 'students' | 'institutions'): void {
    this.activeTab = tab;
  }
}

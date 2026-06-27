import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hiw section" id="como-funciona" aria-labelledby="hiw-heading">
      <div class="container">

        <div class="hiw__header text-center">
          <h2 class="section-title" id="hiw-heading">Reserva tu actividad en<br>3 simples pasos</h2>
          <p class="section-subtitle">
            Diseñado para eliminar la fricción. Sin trámites, sin colas, sin papel.
            Solo tú, tu deporte favorito y unos segundos de tu tiempo.
          </p>
        </div>

        <div class="hiw__steps">
          @for (step of steps; track step.number; let isLast = $last) {
            <div class="step-wrapper">
              <article class="step-card" [attr.aria-label]="'Paso ' + step.number + ': ' + step.title">
                <div class="step-number" [style.background]="step.gradient">
                  {{ step.number }}
                </div>
                <div class="step-icon-wrap" [style.color]="step.iconColor" [style.background]="step.iconBg">
                  <span [innerHTML]="safe(step.iconSvg)"></span>
                </div>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.description }}</p>
                <ul class="step-details">
                  @for (detail of step.details; track detail) {
                    <li>
                      <span class="detail-check" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {{ detail }}
                    </li>
                  }
                </ul>
              </article>
              @if (!isLast) {
                <div class="step-connector" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              }
            </div>
          }
        </div>

        <div class="hiw__results">
          @for (result of results; track result.label) {
            <div class="result-item">
              <span class="result-value">{{ result.value }}</span>
              <span class="result-label">{{ result.label }}</span>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .hiw { background: var(--color-white); }

    .hiw__header { margin-bottom: var(--space-16); }

    .hiw__steps {
      display: flex;
      align-items: stretch;
      gap: 0;
      margin-bottom: var(--space-16);
    }

    .step-wrapper {
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
    }

    .step-card {
      flex: 1;
      text-align: center;
      padding: var(--space-8) var(--space-6);
      background: var(--color-off-white);
      border-radius: var(--radius-xl);
      border: 1px solid var(--color-border);
      transition: all var(--transition-base);
      position: relative;
      min-width: 0;
    }

    .step-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-pale);
      background: var(--color-white);
    }

    .step-number {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      font-size: var(--text-base);
      color: var(--color-white);
      margin: 0 auto var(--space-4);
    }

    .step-icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-5);
    }

    /* span injected by [innerHTML] must be flex so the SVG centres inside its box */
    .step-icon-wrap > span {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }

    .step-title {
      font-family: var(--font-heading);
      font-size: var(--text-xl);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      margin-bottom: var(--space-3);
    }

    .step-desc {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin-bottom: var(--space-5);
    }

    .step-details {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      text-align: left;
    }

    .step-details li {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
    }

    .detail-check {
      color: var(--color-primary);
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .step-connector {
      flex-shrink: 0;
      padding: 0 var(--space-3);
      display: flex;
      align-items: center;
      opacity: 0.7;
    }

    /* Results bar */
    .hiw__results {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: var(--gradient-hero);
      border-radius: var(--radius-xl);
      padding: var(--space-8) var(--space-6);
      gap: 0;
    }

    .result-item {
      text-align: center;
      padding: 0 var(--space-4);
      border-right: 1px solid rgba(255,255,255,0.12);
    }

    .result-item:last-child { border-right: none; }

    .result-value {
      display: block;
      font-family: var(--font-heading);
      font-size: var(--text-4xl);
      font-weight: var(--fw-extrabold);
      color: #69F0AE;
      margin-bottom: var(--space-1);
      letter-spacing: -0.02em;
    }

    .result-label {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.65);
      line-height: 1.4;
    }

    @media (max-width: 1024px) {
      .hiw__steps {
        flex-direction: column;
        gap: var(--space-4);
      }

      .step-wrapper { flex-direction: column; width: 100%; }

      .step-connector {
        transform: rotate(90deg);
        padding: var(--space-2) 0;
      }

      .hiw__results { grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }

      .result-item {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.12);
        padding-bottom: var(--space-5);
      }

      .result-item:nth-child(2),
      .result-item:last-child { border-bottom: none; }
    }

    @media (max-width: 640px) {
      .result-value { font-size: var(--text-3xl); }
    }
  `]
})
export class HowItWorksComponent {
  private sanitizer = inject(DomSanitizer);
  safe(svg: string): SafeHtml { return this.sanitizer.bypassSecurityTrustHtml(svg); }

  steps = [
    {
      number: '01',
      iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
      iconColor: '#1B5E20',
      iconBg: '#E8F5E9',
      title: 'Explorar',
      description: 'Descubre las actividades deportivas disponibles en tu universidad con su horario, lugar y cupos disponibles.',
      gradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
      details: [
        'Catálogo de Yoga, Fútbol, Básquet y más',
        'Filtros por tipo, horario y lugar',
        'Disponibilidad de cupos en tiempo real',
        'Asistente con IA (beta) para sugerencias',
      ]
    },
    {
      number: '02',
      iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      iconColor: '#2E7D32',
      iconBg: '#C8E6C9',
      title: 'Elegir',
      description: 'Selecciona la actividad que mejor se ajuste a ti y revisa sus detalles antes de reservar.',
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #388E3C 100%)',
      details: [
        'Horario, lugar y cupos de la actividad',
        'Tipo de deporte y descripción',
        'Validación de cupos disponibles',
        'Reserva solo si hay lugar',
      ]
    },
    {
      number: '03',
      iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      iconColor: '#388E3C',
      iconBg: '#A5D6A7',
      title: 'Confirmar',
      description: 'Confirma tu reserva y recibe tu código QR. Preséntalo el día de la actividad para registrar tu asistencia.',
      gradient: 'linear-gradient(135deg, #388E3C 0%, #4CAF50 100%)',
      details: [
        'Confirmación inmediata',
        'Código QR único por reserva',
        'Historial de tus reservas',
        'Cancela para liberar tu cupo',
      ]
    },
  ];

  results = [
    { value: '6',     label: 'Deportes para reservar' },
    { value: 'QR',    label: 'En cada reserva' },
    { value: 'Cupos', label: 'Validados en tiempo real' },
    { value: 'IA',    label: 'Asistente en beta' },
  ];
}

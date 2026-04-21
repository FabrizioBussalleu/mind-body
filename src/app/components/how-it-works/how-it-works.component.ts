import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hiw section" id="como-funciona" aria-labelledby="hiw-heading">
      <div class="container">

        <div class="hiw__header text-center">
          <span class="section-tag">Cómo funciona</span>
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
                <div class="step-number" [style.background]="step.color">
                  {{ step.number }}
                </div>
                <div class="step-icon">{{ step.icon }}</div>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.description }}</p>
                <ul class="step-details" aria-label="Detalles">
                  @for (detail of step.details; track detail) {
                    <li>
                      <span class="detail-check" aria-hidden="true">✓</span>
                      {{ detail }}
                    </li>
                  }
                </ul>
              </article>
              @if (!isLast) {
                <div class="step-connector" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 20 H30 M22 12 L30 20 L22 28" stroke="#4CAF50" stroke-width="2.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              }
            </div>
          }
        </div>

        <!-- Stats row -->
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
    .hiw {
      background: var(--color-white);
    }

    .hiw__header {
      margin-bottom: var(--space-16);
    }

    /* Steps */
    .hiw__steps {
      display: flex;
      align-items: flex-start;
      gap: 0;
      margin-bottom: var(--space-16);
    }

    .step-wrapper {
      display: flex;
      align-items: center;
      flex: 1;
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
    }

    .step-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary-pale);
    }

    .step-number {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      font-size: var(--text-xl);
      color: var(--color-white);
      margin: 0 auto var(--space-4);
    }

    .step-icon {
      font-size: 2.5rem;
      margin-bottom: var(--space-4);
    }

    .step-title {
      font-family: var(--font-heading);
      font-size: var(--text-xl);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      margin-bottom: var(--space-3);
    }

    .step-desc {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      line-height: 1.6;
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
      align-items: flex-start;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
    }

    .detail-check {
      color: var(--color-primary-light);
      font-weight: var(--fw-bold);
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* Connector arrow */
    .step-connector {
      flex-shrink: 0;
      padding: 0 var(--space-2);
      margin-top: -var(--space-8);
    }

    /* Results bar */
    .hiw__results {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-4);
      background: var(--gradient-hero);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .result-item {
      text-align: center;
      color: var(--color-white);
    }

    .result-value {
      display: block;
      font-family: var(--font-heading);
      font-size: var(--text-4xl);
      font-weight: var(--fw-extrabold);
      color: var(--color-primary-pale);
      margin-bottom: var(--space-1);
    }

    .result-label {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.75);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hiw__steps {
        flex-direction: column;
        gap: var(--space-4);
      }

      .step-wrapper { flex-direction: column; width: 100%; }
      .step-connector { transform: rotate(90deg); }

      .hiw__results { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .hiw__results { grid-template-columns: 1fr 1fr; gap: var(--space-6); }
      .result-value { font-size: var(--text-3xl); }
    }
  `]
})
export class HowItWorksComponent {
  steps = [
    {
      number: '01',
      icon: '🔍',
      title: 'Explorar',
      description: 'Descubre todas las actividades deportivas disponibles en tu universidad, filtradas por horario, tipo y espacio.',
      color: '#1B5E20',
      details: [
        'Búsqueda en tiempo real',
        'Filtros por horario, tipo y nivel',
        'Recomendaciones personalizadas con IA',
        'Vista de disponibilidad instantánea',
      ]
    },
    {
      number: '02',
      icon: '🎯',
      title: 'Elegir',
      description: 'Selecciona la actividad que más te convenga. La IA ya sincronizó tu calendario académico para mostrarte las mejores opciones.',
      color: '#2E7D32',
      details: [
        'Detalles del instructor y espacio',
        'Integrado con tu horario académico',
        'Previsualización del espacio deportivo',
        'Calificaciones de otros estudiantes',
      ]
    },
    {
      number: '03',
      icon: '✅',
      title: 'Confirmar',
      description: 'Confirma tu reserva con un clic. Recibirás confirmación inmediata y recordatorios automáticos antes de la actividad.',
      color: '#4CAF50',
      details: [
        'Confirmación instantánea',
        'QR de acceso a instalaciones',
        'Recordatorios push y email',
        'Opción de cancelar hasta 2h antes',
      ]
    },
  ];

  results = [
    { value: '30s', label: 'Tiempo promedio de reserva' },
    { value: '+48%', label: 'Participación estudiantil' },
    { value: '-60%', label: 'Carga administrativa' },
    { value: '94%', label: 'Satisfacción de usuarios' },
  ];
}

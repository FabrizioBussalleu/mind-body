import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cta" id="cta" aria-labelledby="cta-heading">
      <div class="cta__bg" aria-hidden="true">
        <div class="cta-circle cta-circle--1"></div>
        <div class="cta-circle cta-circle--2"></div>
      </div>

      <div class="container cta__container">

        <!-- Universities CTA -->
        <div class="cta-panel" id="universidades">
          <div class="cta-panel__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="15"/><path d="M16 22V11h-5v11M2 7l10-5 10 5"/>
            </svg>
            Para Universidades
          </div>
          <h2 class="cta-panel__title" id="cta-heading">
            Gestiona tu deporte universitario
          </h2>
          <p class="cta-panel__desc">
            Administra actividades, cupos y asistencia desde un panel pensado para
            el equipo deportivo de tu universidad. Crea tu cuenta de administrador
            y empieza a gestionar el catálogo.
          </p>

          <div class="cta-actions">
            <a [href]="registerUrl" class="btn btn-primary btn-lg cta-btn">
              Crear cuenta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a [href]="loginUrl" class="cta-link">Ya tengo cuenta · Acceder</a>
          </div>
        </div>

        <!-- Students CTA -->
        <div class="cta-panel cta-panel--students">
          <div class="cta-panel__badge students-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Para Estudiantes
          </div>
          <h2 class="cta-panel__title">Empieza tu bienestar hoy</h2>
          <p class="cta-panel__desc">
            Explora el catálogo de actividades de tu universidad, reserva con
            código QR y lleva el control de tus reservas. Crea tu cuenta gratis
            y reserva tu primera actividad.
          </p>

          <div class="cta-actions">
            <a [href]="registerUrl" class="btn btn-lg cta-btn students-btn">
              Crear cuenta gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a [href]="loginUrl" class="cta-link students-link">Ya tengo cuenta · Acceder</a>
          </div>

          <div class="cta-activities" aria-hidden="true">
            @for (a of activities; track a.label) {
              <div class="activity-pill">
                <span class="activity-dot" [style.background]="a.color"></span>
                {{ a.label }}
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .cta {
      background: var(--color-primary-bg);
      position: relative;
      overflow: hidden;
      padding: var(--space-20) 0;
    }

    .cta__bg { position: absolute; inset: 0; pointer-events: none; }

    .cta-circle {
      position: absolute;
      border-radius: 50%;
      background: var(--color-primary-pale);
      opacity: 0.25;
    }

    .cta-circle--1 { width: 400px; height: 400px; top: -150px; left: -100px; }
    .cta-circle--2 { width: 320px; height: 320px; bottom: -110px; right: -60px; }

    /* Grid — stretch makes both panels share the same height */
    .cta__container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
      align-items: stretch;   /* ← equal height */
    }

    /* Panels fill their grid cell */
    .cta-panel {
      background: var(--color-primary-dark);
      border-radius: var(--radius-xl);
      padding: var(--space-10);
      color: var(--color-white);
      display: flex;
      flex-direction: column;
    }

    .cta-panel--students {
      background: linear-gradient(145deg, #2E7D32 0%, #43A047 60%, #4CAF50 100%);
    }

    .cta-panel__badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--color-primary-pale);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      padding: 6px var(--space-4);
      border-radius: var(--radius-full);
      margin-bottom: var(--space-5);
      width: fit-content;
    }

    .students-badge { color: rgba(255,255,255,0.95); }

    .cta-panel__title {
      font-family: var(--font-heading);
      font-size: var(--text-3xl);
      font-weight: var(--fw-bold);
      line-height: 1.2;
      margin-bottom: var(--space-4);
      color: var(--color-white);
    }

    .cta-panel__desc {
      font-size: var(--text-base);
      color: rgba(255,255,255,0.75);
      line-height: 1.75;
      margin-bottom: var(--space-8);
    }

    /* Actions sit at the bottom of the flex panel */
    .cta-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-4);
      margin-top: auto;   /* pushes actions to bottom when panel heights differ */
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      background: var(--color-primary-light);
      color: var(--color-white);
      transition: all var(--transition-base);
    }

    .cta-btn:hover {
      background: #43A047;
      transform: translateY(-2px);
    }

    .students-btn {
      background: var(--color-white);
      color: var(--color-primary-dark);
      font-weight: var(--fw-semibold);
    }

    .students-btn:hover {
      background: var(--color-primary-bg);
      transform: translateY(-2px);
    }

    .cta-link {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: rgba(255,255,255,0.75);
      transition: color var(--transition-fast);
    }

    .cta-link:hover { color: var(--color-white); }

    .students-link { color: rgba(255,255,255,0.85); }
    .students-link:hover { color: var(--color-white); }

    /* Activity pills */
    .cta-activities {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-top: var(--space-6);
    }

    .activity-pill {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: var(--radius-full);
      padding: 6px var(--space-4);
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.9);
    }

    .activity-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    @media (max-width: 1024px) {
      .cta__container {
        grid-template-columns: 1fr;
        align-items: start;
        max-width: 580px;
        margin: 0 auto;
      }
      /* On single column, actions sit naturally (no margin-top: auto) */
      .cta-actions { margin-top: 0; }
    }

    @media (max-width: 640px) {
      .cta-panel { padding: var(--space-7) var(--space-6); }
      .cta-actions { align-items: stretch; }
      .cta-btn { width: 100%; }
      .cta-link { text-align: center; }
    }
  `]
})
export class CtaComponent {
  readonly loginUrl = 'https://mind-body-web.netlify.app/auth/login';
  readonly registerUrl = 'https://mind-body-web.netlify.app/auth/register';

  activities = [
    { label: 'Yoga · Lunes 7am',  color: '#4CAF50' },
    { label: 'Fútbol · Mié 12pm', color: '#2196F3' },
    { label: 'Gym · Vie 6pm',     color: '#FF5722' },
  ];
}

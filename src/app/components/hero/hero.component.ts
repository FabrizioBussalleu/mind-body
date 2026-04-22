import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="inicio" aria-labelledby="hero-heading">
      <div class="hero__bg" aria-hidden="true">
        <div class="bg-circle bg-circle--1"></div>
        <div class="bg-circle bg-circle--2"></div>
        <div class="bg-circle bg-circle--3"></div>
        <div class="bg-grid"></div>
      </div>

      <div class="container hero__container">
        <!-- Content -->
        <div class="hero__content">
          <div class="hero__badge">
            <span class="badge-dot"></span>
            Plataforma #1 de Bienestar Universitario
          </div>

          <h1 class="hero__title" id="hero-heading">
            Transforma el deporte<br>
            universitario con<br>
            <span class="hero__title-accent">inteligencia</span>
          </h1>

          <p class="hero__subtitle">
            Mind&amp;Body centraliza, automatiza y optimiza la gestión deportiva
            de tu universidad. Conecta a estudiantes con actividades usando IA
            que entiende sus horarios académicos.
          </p>

          <div class="hero__stats" role="list">
            @for (stat of stats; track stat.label; let last = $last) {
              <div class="hero__stat" role="listitem">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
              @if (!last) { <div class="stat-divider" aria-hidden="true"></div> }
            }
          </div>

          <div class="hero__actions">
            <a href="#cta" class="btn btn-primary btn-lg">
              Solicitar Demo gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#como-funciona" class="btn btn-secondary btn-lg">
              Cómo funciona
            </a>
          </div>

          <div class="hero__trust" role="list">
            @for (item of trustItems; track item) {
              <span class="trust-item" role="listitem">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ item }}
              </span>
            }
          </div>
        </div>

        <!-- Dashboard visual — absolutely positioned on desktop -->
        <div class="hero__visual" aria-hidden="true">
          <div class="dashboard-card">

            <div class="dashboard-header">
              <div class="dashboard-logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
                  <path d="M6 17 C6 17 7.5 11 12 11 C16.5 11 18 17 18 17"
                        stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>
                  <circle cx="12" cy="7.5" r="2.5" fill="white"/>
                </svg>
                <span>Mind&amp;Body</span>
              </div>
              <span class="dashboard-live">
                <span class="live-dot"></span>
                En vivo
              </span>
            </div>

            <div class="dashboard-metrics">
              <div class="metric-card">
                <div class="metric-icon" style="background:#E8F5E9; color:#2E7D32">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                </div>
                <div class="metric-info">
                  <span class="metric-value">248</span>
                  <span class="metric-label">Reservas hoy</span>
                </div>
                <span class="metric-trend positive">+12%</span>
              </div>

              <div class="metric-card">
                <div class="metric-icon" style="background:#E3F2FD; color:#1565C0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div class="metric-info">
                  <span class="metric-value">1,842</span>
                  <span class="metric-label">Estudiantes activos</span>
                </div>
                <span class="metric-trend positive">+8%</span>
              </div>

              <div class="metric-card">
                <div class="metric-icon" style="background:#FFF3E0; color:#E65100">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="15"/>
                    <path d="M16 22V11h-5v11M2 7l10-5 10 5"/>
                  </svg>
                </div>
                <div class="metric-info">
                  <span class="metric-value">94%</span>
                  <span class="metric-label">Ocupación de espacios</span>
                </div>
                <span class="metric-trend positive">+35%</span>
              </div>
            </div>

            <div class="dashboard-activities">
              <div class="activities-label">Próximas actividades</div>
              @for (activity of activities; track activity.name) {
                <div class="activity-item">
                  <div class="activity-dot" [style.background]="activity.color"></div>
                  <div class="activity-info">
                    <span class="activity-name">{{ activity.name }}</span>
                    <span class="activity-time">{{ activity.time }} · {{ activity.space }}</span>
                  </div>
                  <span class="activity-spots">{{ activity.spots }}</span>
                </div>
              }
            </div>

            <!-- Floating AI badge -->
            <div class="ai-badge animate-float">
              <div class="ai-icon-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3l1.88 5.76a2 2 0 0 0 1.24 1.24L21 12l-5.88 1.88a2 2 0 0 0-1.24 1.24L12 21l-1.88-5.88a2 2 0 0 0-1.24-1.24L3 12l5.88-1.88a2 2 0 0 0 1.24-1.24L12 3z"/>
                </svg>
              </div>
              <div>
                <div class="ai-title">IA Activa</div>
                <div class="ai-desc">Recomendando para ti</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      background: var(--gradient-hero);
      overflow: hidden;
      padding-top: 72px;
    }

    .hero__bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.07);
    }

    .bg-circle--1 { width: 660px; height: 660px; top: -200px; right: -60px; }
    .bg-circle--2 { width: 440px; height: 440px; bottom: -170px; left: -90px; }
    .bg-circle--3 { width: 260px; height: 260px; top: 30%; left: 38%; background: rgba(255,255,255,0.03); }

    .bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* Container — relative anchor for absolutely-placed visual */
    .hero__container {
      position: relative;
      z-index: 1;
      min-height: calc(100vh - 72px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: var(--space-16);
      padding-bottom: var(--space-16);
    }

    /* Content — left half on desktop */
    .hero__content {
      max-width: 560px;
      position: relative;
      z-index: 2;
    }

    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.18);
      color: var(--color-primary-pale);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      padding: 6px var(--space-4);
      border-radius: var(--radius-full);
      margin-bottom: var(--space-6);
      animation: fadeInUp 0.5s ease both;
    }

    .badge-dot {
      width: 7px;
      height: 7px;
      background: #69F0AE;
      border-radius: 50%;
      flex-shrink: 0;
      animation: pulse-ring 2s ease infinite;
    }

    .hero__title {
      font-family: var(--font-heading);
      font-size: clamp(2.6rem, 5vw, 3.75rem);
      font-weight: var(--fw-extrabold);
      color: var(--color-white);
      line-height: 1.08;
      letter-spacing: -0.025em;
      margin-bottom: var(--space-6);
      animation: fadeInUp 0.6s ease 0.1s both;
    }

    .hero__title-accent {
      color: #69F0AE;
      font-style: italic;
    }

    .hero__subtitle {
      font-size: var(--text-lg);
      color: rgba(255,255,255,0.72);
      line-height: 1.75;
      max-width: 500px;
      margin-bottom: var(--space-8);
      animation: fadeInUp 0.6s ease 0.2s both;
    }

    .hero__stats {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: var(--space-8);
      animation: fadeInUp 0.6s ease 0.3s both;
    }

    .hero__stat {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 0 var(--space-6);
    }

    .hero__stat:first-child { padding-left: 0; }

    .stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.15);
      flex-shrink: 0;
    }

    .stat-value {
      font-family: var(--font-heading);
      font-size: var(--text-2xl);
      font-weight: var(--fw-extrabold);
      color: var(--color-white);
      letter-spacing: -0.02em;
      line-height: 1;
    }

    .stat-label {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    .hero__actions {
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
      margin-bottom: var(--space-6);
      animation: fadeInUp 0.6s ease 0.4s both;
    }

    .hero__trust {
      display: flex;
      gap: var(--space-5);
      flex-wrap: wrap;
      animation: fadeInUp 0.6s ease 0.5s both;
    }

    .trust-item {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.55);
    }

    .trust-item svg { color: #69F0AE; flex-shrink: 0; }

    /* Dashboard — absolute on desktop, relative on mobile */
    .hero__visual {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: calc(50% - var(--space-8));
      max-width: 460px;
      animation: fadeIn 0.9s ease 0.35s both;
    }

    .dashboard-card {
      background: var(--color-white);
      border-radius: var(--radius-xl);
      padding: var(--space-5);
      box-shadow: 0 28px 72px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1);
      position: relative;
    }

    .dashboard-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-4);
      padding-bottom: var(--space-4);
      border-bottom: 1px solid var(--color-border);
    }

    .dashboard-logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      font-size: var(--text-sm);
      color: var(--color-primary-dark);
    }

    .dashboard-live {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--color-primary-bg);
      color: var(--color-primary);
      font-size: 11px;
      font-weight: var(--fw-semibold);
      padding: 3px 10px;
      border-radius: var(--radius-full);
    }

    .live-dot {
      width: 6px;
      height: 6px;
      background: var(--color-primary-light);
      border-radius: 50%;
      animation: pulse-ring 2s ease infinite;
    }

    .dashboard-metrics {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }

    .metric-card {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      background: var(--color-off-white);
      border-radius: var(--radius-md);
      padding: 10px var(--space-3);
    }

    .metric-icon {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .metric-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 2px;
    }

    .metric-value {
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      font-size: var(--text-base);
      line-height: 1;
    }

    .metric-label {
      font-size: 11px;
      color: var(--color-text-secondary);
    }

    .metric-trend {
      font-size: var(--text-xs);
      font-weight: var(--fw-semibold);
      color: var(--color-text-secondary);
    }

    .metric-trend.positive { color: var(--color-primary); }

    .activities-label {
      font-size: 11px;
      font-weight: var(--fw-semibold);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-3);
    }

    .activity-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: 8px 0;
      border-bottom: 1px solid var(--color-border);
    }

    .activity-item:last-child { border-bottom: none; }

    .activity-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .activity-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1px;
    }

    .activity-name {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: var(--color-text);
    }

    .activity-time {
      font-size: 11px;
      color: var(--color-text-secondary);
    }

    .activity-spots {
      font-size: var(--text-xs);
      color: var(--color-primary);
      font-weight: var(--fw-semibold);
      white-space: nowrap;
    }

    /* AI Badge — floating, bottom-left */
    .ai-badge {
      position: absolute;
      bottom: -20px;
      left: -20px;
      background: var(--color-primary-dark);
      color: var(--color-white);
      border-radius: var(--radius-lg);
      padding: 10px var(--space-4);
      display: flex;
      align-items: center;
      gap: var(--space-2);
      box-shadow: 0 12px 32px rgba(27,94,32,0.35);
    }

    .ai-icon-wrap {
      width: 32px;
      height: 32px;
      background: rgba(255,255,255,0.12);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #69F0AE;
      flex-shrink: 0;
    }

    .ai-title {
      font-size: var(--text-sm);
      font-weight: var(--fw-bold);
      color: var(--color-primary-pale);
      line-height: 1;
    }

    .ai-desc {
      font-size: 11px;
      color: rgba(255,255,255,0.55);
      margin-top: 2px;
    }

    /* Responsive */
    @media (max-width: 1060px) {
      .hero__visual {
        position: relative;
        top: auto;
        right: auto;
        transform: none;
        width: 100%;
        max-width: 500px;
        margin: var(--space-12) auto 0;
        animation: fadeInUp 0.8s ease 0.3s both;
      }

      .hero__container {
        min-height: auto;
        align-items: center;
        text-align: center;
      }

      .hero__content { max-width: 640px; margin: 0 auto; }

      .hero__stats { justify-content: center; }
      .hero__actions { justify-content: center; }
      .hero__trust  { justify-content: center; }

      .hero__subtitle { margin-left: auto; margin-right: auto; }
    }

    @media (max-width: 768px) {
      .hero { padding-bottom: var(--space-16); }
      .hero__stat { padding: 0 var(--space-4); }
      .hero__trust { flex-direction: column; align-items: center; gap: var(--space-2); }
    }

    @media (max-width: 480px) {
      .hero__actions { flex-direction: column; align-items: stretch; }
      .hero__actions .btn { justify-content: center; }
      .ai-badge { left: 0; bottom: -15px; }
    }
  `]
})
export class HeroComponent {
  stats = [
    { value: '100+', label: 'Universidades' },
    { value: '89%',  label: 'Adopción móvil' },
    { value: '3',    label: 'Pasos para reservar' },
  ];

  trustItems = [
    'Sin tarjeta de crédito',
    'Implementación en 48h',
    'Soporte 24/7',
  ];

  activities = [
    { name: 'Yoga Matutino',  time: 'Lun 7:00am',  space: 'Sala Zen',      spots: '3 cupos', color: '#4CAF50' },
    { name: 'Fútbol 5',       time: 'Lun 12:00pm', space: 'Cancha A',      spots: '2 cupos', color: '#2196F3' },
    { name: 'CrossFit',       time: 'Lun 6:00pm',  space: 'Gym Principal', spots: '5 cupos', color: '#FF5722' },
  ];
}

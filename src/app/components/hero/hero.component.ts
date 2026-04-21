import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="inicio" aria-labelledby="hero-heading">
      <!-- Background decorative shapes -->
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

          <!-- Stats row -->
          <div class="hero__stats" role="list">
            @for (stat of stats; track stat.label) {
              <div class="hero__stat" role="listitem">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            }
          </div>

          <!-- CTA Buttons -->
          <div class="hero__actions">
            <a href="#cta" class="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 12h8M12 8l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Solicitar Demo gratuita
            </a>
            <a href="#como-funciona" class="btn btn-secondary btn-lg">
              Cómo funciona
            </a>
          </div>

          <!-- Trust badges -->
          <div class="hero__trust">
            <span class="trust-item">✓ Sin tarjeta de crédito</span>
            <span class="trust-item">✓ Implementación en 48h</span>
            <span class="trust-item">✓ Soporte 24/7</span>
          </div>
        </div>

        <!-- Visual Panel -->
        <div class="hero__visual" aria-hidden="true">
          <!-- Dashboard card mockup -->
          <div class="dashboard-card">
            <div class="dashboard-header">
              <div class="dashboard-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
                  <path d="M6 17 C6 17 7.5 11 12 11 C16.5 11 18 17 18 17" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>
                  <circle cx="12" cy="7.5" r="2.5" fill="white"/>
                </svg>
                <span>Mind&amp;Body</span>
              </div>
              <span class="dashboard-badge">En vivo</span>
            </div>

            <div class="dashboard-metrics">
              @for (metric of metrics; track metric.label) {
                <div class="metric-card">
                  <div class="metric-icon" [style.background]="metric.bg">{{ metric.icon }}</div>
                  <div class="metric-info">
                    <span class="metric-value">{{ metric.value }}</span>
                    <span class="metric-label">{{ metric.label }}</span>
                  </div>
                  <span class="metric-trend" [class.positive]="metric.positive">
                    {{ metric.trend }}
                  </span>
                </div>
              }
            </div>

            <div class="dashboard-activities">
              <div class="activities-title">Próximas actividades</div>
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

            <!-- Floating IA badge -->
            <div class="ai-badge animate-float">
              <span class="ai-icon">🤖</span>
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
      display: flex;
      align-items: center;
      background: var(--gradient-hero);
      overflow: hidden;
      padding-top: 72px;
    }

    /* Background */
    .hero__bg { position: absolute; inset: 0; pointer-events: none; }

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      opacity: 0.08;
      background: var(--color-white);
    }

    .bg-circle--1 { width: 600px; height: 600px; top: -200px; right: -100px; }
    .bg-circle--2 { width: 400px; height: 400px; bottom: -150px; left: -100px; }
    .bg-circle--3 { width: 200px; height: 200px; top: 30%; left: 40%; opacity: 0.05; }

    .bg-grid {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    /* Container */
    .hero__container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: center;
      padding-top: var(--space-16);
      padding-bottom: var(--space-16);
    }

    /* Content */
    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      color: var(--color-primary-pale);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-full);
      margin-bottom: var(--space-6);
      animation: fadeInUp 0.5s ease forwards;
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: var(--color-primary-light);
      border-radius: 50%;
      animation: pulse-ring 2s ease infinite;
    }

    .hero__title {
      font-family: var(--font-heading);
      font-size: clamp(2.5rem, 5vw, 3.75rem);
      font-weight: var(--fw-extrabold);
      color: var(--color-white);
      line-height: 1.1;
      margin-bottom: var(--space-6);
      animation: fadeInUp 0.6s ease 0.1s both;
    }

    .hero__title-accent {
      color: var(--color-primary-pale);
      font-style: italic;
    }

    .hero__subtitle {
      font-size: var(--text-lg);
      color: rgba(255,255,255,0.8);
      line-height: 1.7;
      max-width: 520px;
      margin-bottom: var(--space-8);
      animation: fadeInUp 0.6s ease 0.2s both;
    }

    /* Stats */
    .hero__stats {
      display: flex;
      gap: var(--space-8);
      margin-bottom: var(--space-8);
      animation: fadeInUp 0.6s ease 0.3s both;
    }

    .hero__stat {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .stat-value {
      font-family: var(--font-heading);
      font-size: var(--text-2xl);
      font-weight: var(--fw-bold);
      color: var(--color-white);
    }

    .stat-label {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.65);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Actions */
    .hero__actions {
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      margin-bottom: var(--space-5);
      animation: fadeInUp 0.6s ease 0.4s both;
    }

    /* Trust */
    .hero__trust {
      display: flex;
      gap: var(--space-5);
      flex-wrap: wrap;
      animation: fadeInUp 0.6s ease 0.5s both;
    }

    .trust-item {
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.65);
    }

    /* Visual / Dashboard */
    .hero__visual {
      position: relative;
      animation: fadeIn 0.8s ease 0.3s both;
    }

    .dashboard-card {
      background: var(--color-white);
      border-radius: var(--radius-xl);
      padding: var(--space-6);
      box-shadow: var(--shadow-xl);
      position: relative;
      overflow: hidden;
    }

    .dashboard-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-5);
    }

    .dashboard-logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      color: var(--color-primary-dark);
      font-size: var(--text-base);
    }

    .dashboard-badge {
      background: var(--color-primary-bg);
      color: var(--color-primary-light);
      font-size: var(--text-xs);
      font-weight: var(--fw-semibold);
      padding: 3px 10px;
      border-radius: var(--radius-full);
      border: 1px solid var(--color-primary-pale);
    }

    .dashboard-metrics {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      margin-bottom: var(--space-5);
    }

    .metric-card {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      background: var(--color-off-white);
      border-radius: var(--radius-md);
      padding: var(--space-3);
    }

    .metric-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .metric-info {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .metric-value {
      font-family: var(--font-heading);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      font-size: var(--text-lg);
    }

    .metric-label {
      font-size: var(--text-xs);
      color: var(--color-text-secondary);
    }

    .metric-trend {
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      color: var(--color-text-secondary);
    }

    .metric-trend.positive { color: var(--color-primary-light); }

    /* Activities */
    .activities-title {
      font-weight: var(--fw-semibold);
      color: var(--color-dark);
      font-size: var(--text-sm);
      margin-bottom: var(--space-3);
    }

    .activity-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-2) 0;
      border-bottom: 1px solid var(--color-border);
    }

    .activity-item:last-child { border-bottom: none; }

    .activity-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .activity-info {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .activity-name {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: var(--color-text);
    }

    .activity-time {
      font-size: var(--text-xs);
      color: var(--color-text-secondary);
    }

    .activity-spots {
      font-size: var(--text-xs);
      color: var(--color-primary-light);
      font-weight: var(--fw-semibold);
      white-space: nowrap;
    }

    /* AI Badge */
    .ai-badge {
      position: absolute;
      top: -20px;
      right: -20px;
      background: var(--color-primary-dark);
      color: var(--color-white);
      border-radius: var(--radius-lg);
      padding: var(--space-3) var(--space-4);
      display: flex;
      align-items: center;
      gap: var(--space-2);
      box-shadow: var(--shadow-lg);
    }

    .ai-icon { font-size: 1.5rem; }

    .ai-title {
      font-size: var(--text-sm);
      font-weight: var(--fw-bold);
      color: var(--color-primary-pale);
    }

    .ai-desc {
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.65);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero__container {
        grid-template-columns: 1fr;
        gap: var(--space-12);
      }

      .hero__visual { order: -1; }

      .dashboard-card { max-width: 480px; margin: 0 auto; }

      .ai-badge { top: -15px; right: 10px; }
    }

    @media (max-width: 768px) {
      .hero { min-height: auto; padding-bottom: var(--space-16); }

      .hero__container { padding-top: var(--space-10); }

      .hero__stats { gap: var(--space-5); }

      .hero__actions {
        flex-direction: column;
        align-items: flex-start;
      }

      .hero__trust { flex-direction: column; gap: var(--space-2); }

      .ai-badge { display: none; }
    }
  `]
})
export class HeroComponent {
  stats = [
    { value: '100+', label: 'Universidades' },
    { value: '89%', label: 'Adopción móvil' },
    { value: '3 pasos', label: 'Para reservar' },
  ];

  metrics = [
    { icon: '📅', bg: '#E8F5E9', value: '248', label: 'Reservas hoy', trend: '+12%', positive: true },
    { icon: '🏃', bg: '#E3F2FD', value: '1,842', label: 'Estudiantes activos', trend: '+8%', positive: true },
    { icon: '🏟️', bg: '#FFF3E0', value: '94%', label: 'Ocupación de espacios', trend: '+35%', positive: true },
  ];

  activities = [
    { name: 'Yoga Matutino', time: 'Lun 7:00am', space: 'Sala Zen', spots: '3 cupos', color: '#4CAF50' },
    { name: 'Fútbol 5', time: 'Lun 12:00pm', space: 'Cancha A', spots: '2 cupos', color: '#2196F3' },
    { name: 'CrossFit', time: 'Lun 6:00pm', space: 'Gym Principal', spots: '5 cupos', color: '#FF5722' },
  ];
}

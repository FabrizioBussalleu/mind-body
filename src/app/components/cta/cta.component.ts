import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
            Transforma tu gestión deportiva
          </h2>
          <p class="cta-panel__desc">
            Únete a las universidades que ya digitalizaron su bienestar estudiantil.
            Demo personalizada sin costo, implementación en 48 horas.
          </p>

          <form class="cta-form" (submit)="submitUniversity($event)" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="uni-name" class="form-label">Nombre</label>
                <input id="uni-name" type="text" class="form-input"
                  placeholder="Tu nombre completo"
                  [(ngModel)]="uniForm.name" name="uniName" required/>
              </div>
              <div class="form-group">
                <label for="uni-email" class="form-label">Email institucional</label>
                <input id="uni-email" type="email" class="form-input"
                  placeholder="nombre@universidad.edu.pe"
                  [(ngModel)]="uniForm.email" name="uniEmail" required/>
              </div>
            </div>
            <div class="form-group">
              <label for="uni-institution" class="form-label">Universidad</label>
              <input id="uni-institution" type="text" class="form-input"
                placeholder="Nombre de tu universidad"
                [(ngModel)]="uniForm.institution" name="uniInstitution" required/>
            </div>
            <button type="submit" class="btn btn-primary btn-lg form-submit" [disabled]="uniSubmitted()">
              @if (uniSubmitted()) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Solicitud enviada — te contactaremos pronto
              } @else {
                Solicitar Demo gratuita
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            </button>
          </form>

          <ul class="cta-guarantees">
            @for (g of guarantees; track g) {
              <li>
                <span class="guarantee-check" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {{ g }}
              </li>
            }
          </ul>
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
            Accede a todas las actividades deportivas de tu universidad.
            Regístrate gratis y recibe tu primera recomendación personalizada.
          </p>

          <form class="cta-form" (submit)="submitStudent($event)" novalidate>
            <div class="form-group">
              <label for="stu-email" class="form-label">Email universitario</label>
              <input id="stu-email" type="email" class="form-input"
                placeholder="codigo@universidad.edu.pe"
                [(ngModel)]="stuForm.email" name="stuEmail" required/>
            </div>
            <button type="submit" class="btn btn-lg form-submit students-btn" [disabled]="stuSubmitted()">
              @if (stuSubmitted()) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Bienvenido a Mind&amp;Body
              } @else {
                Registrarme gratis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            </button>
          </form>

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

    .cta__container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
      align-items: start;
    }

    .cta-panel {
      background: var(--color-primary-dark);
      border-radius: var(--radius-xl);
      padding: var(--space-10);
      color: var(--color-white);
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

    .cta-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3);
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-label {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: rgba(255,255,255,0.75);
    }

    .form-input {
      background: rgba(255,255,255,0.08);
      border: 1.5px solid rgba(255,255,255,0.2);
      border-radius: var(--radius-md);
      padding: var(--space-3) var(--space-4);
      font-family: var(--font-body);
      font-size: var(--text-base);
      color: var(--color-white);
      outline: none;
      transition: border-color var(--transition-fast), background var(--transition-fast);
      width: 100%;
    }

    .form-input::placeholder { color: rgba(255,255,255,0.35); }

    .form-input:focus {
      border-color: rgba(255,255,255,0.5);
      background: rgba(255,255,255,0.12);
    }

    .form-submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      background: var(--color-primary-light);
      color: var(--color-white);
      transition: all var(--transition-base);
    }

    .form-submit:not(:disabled):hover {
      background: #43A047;
      transform: translateY(-2px);
    }

    .form-submit:disabled {
      background: rgba(255,255,255,0.18);
      cursor: not-allowed;
    }

    .students-btn {
      background: var(--color-white);
      color: var(--color-primary-dark);
      font-weight: var(--fw-semibold);
    }

    .students-btn:not(:disabled):hover {
      background: var(--color-primary-bg);
      transform: translateY(-2px);
    }

    .cta-guarantees {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .cta-guarantees li {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: rgba(255,255,255,0.7);
    }

    .guarantee-check {
      width: 20px;
      height: 20px;
      background: rgba(255,255,255,0.12);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #69F0AE;
      flex-shrink: 0;
    }

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
      .cta__container { grid-template-columns: 1fr; max-width: 600px; margin: 0 auto; }
    }

    @media (max-width: 640px) {
      .cta-panel { padding: var(--space-7) var(--space-6); }
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class CtaComponent {
  uniSubmitted = signal(false);
  stuSubmitted = signal(false);

  uniForm = { name: '', email: '', institution: '' };
  stuForm = { email: '' };

  guarantees = [
    'Sin tarjeta de crédito requerida',
    'Implementación guiada en 48 horas',
    'Soporte dedicado durante el primer mes',
    'Datos migrados sin costo adicional',
  ];

  activities = [
    { label: 'Yoga · Lunes 7am',     color: '#4CAF50' },
    { label: 'Fútbol · Mié 12pm',    color: '#2196F3' },
    { label: 'Gym · Vie 6pm',        color: '#FF5722' },
  ];

  submitUniversity(event: Event): void {
    event.preventDefault();
    if (this.uniForm.name && this.uniForm.email && this.uniForm.institution) {
      this.uniSubmitted.set(true);
    }
  }

  submitStudent(event: Event): void {
    event.preventDefault();
    if (this.stuForm.email) {
      this.stuSubmitted.set(true);
    }
  }
}

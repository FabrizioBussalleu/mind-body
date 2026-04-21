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
          <div class="cta-panel__badge">🏫 Para Universidades</div>
          <h2 class="cta-panel__title" id="cta-heading">
            Transforma tu gestión deportiva
          </h2>
          <p class="cta-panel__desc">
            Únete a las universidades que ya digitalizaron su bienestar estudiantil.
            Demo personalizada sin costo, implementación en 48 horas.
          </p>

          <form class="cta-form" (submit)="submitUniversity($event)" novalidate aria-label="Formulario solicitar demo">
            <div class="form-row">
              <div class="form-group">
                <label for="uni-name" class="form-label">Nombre</label>
                <input
                  id="uni-name"
                  type="text"
                  class="form-input"
                  placeholder="Tu nombre completo"
                  [(ngModel)]="uniForm.name"
                  name="uniName"
                  required
                  aria-required="true"
                />
              </div>
              <div class="form-group">
                <label for="uni-email" class="form-label">Email institucional</label>
                <input
                  id="uni-email"
                  type="email"
                  class="form-input"
                  placeholder="nombre@universidad.edu.pe"
                  [(ngModel)]="uniForm.email"
                  name="uniEmail"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="uni-institution" class="form-label">Universidad</label>
              <input
                id="uni-institution"
                type="text"
                class="form-input"
                placeholder="Nombre de tu universidad"
                [(ngModel)]="uniForm.institution"
                name="uniInstitution"
                required
                aria-required="true"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-lg form-submit" [disabled]="uniSubmitted()">
              @if (uniSubmitted()) {
                <span>✓ ¡Solicitud enviada! Te contactaremos pronto.</span>
              } @else {
                <span>Solicitar Demo gratuita →</span>
              }
            </button>
          </form>

          <ul class="cta-guarantees" aria-label="Garantías">
            @for (g of guarantees; track g) {
              <li><span aria-hidden="true">✓</span> {{ g }}</li>
            }
          </ul>
        </div>

        <!-- Students CTA -->
        <div class="cta-panel cta-panel--students">
          <div class="cta-panel__badge students-badge">🎓 Para Estudiantes</div>
          <h2 class="cta-panel__title">
            Empieza tu bienestar hoy
          </h2>
          <p class="cta-panel__desc">
            Accede a todas las actividades deportivas de tu universidad.
            Regístrate gratis y recibe tu primera recomendación personalizada.
          </p>

          <form class="cta-form" (submit)="submitStudent($event)" novalidate aria-label="Formulario registro estudiante">
            <div class="form-group">
              <label for="stu-email" class="form-label">Email universitario</label>
              <input
                id="stu-email"
                type="email"
                class="form-input"
                placeholder="codigo@universidad.edu.pe"
                [(ngModel)]="stuForm.email"
                name="stuEmail"
                required
                aria-required="true"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-lg form-submit students-btn" [disabled]="stuSubmitted()">
              @if (stuSubmitted()) {
                <span>✓ ¡Bienvenido a Mind&Body!</span>
              } @else {
                <span>Registrarme gratis →</span>
              }
            </button>
          </form>

          <div class="cta-student-icons" aria-hidden="true">
            <div class="student-activity">🧘 Yoga · Lunes 7am</div>
            <div class="student-activity">⚽ Fútbol · Mié 12pm</div>
            <div class="student-activity">🏋️ Gym · Vie 6pm</div>
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
      opacity: 0.3;
    }

    .cta-circle--1 { width: 400px; height: 400px; top: -150px; left: -100px; }
    .cta-circle--2 { width: 300px; height: 300px; bottom: -100px; right: -50px; }

    .cta__container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-8);
      align-items: start;
    }

    /* Panel */
    .cta-panel {
      background: var(--color-primary-dark);
      border-radius: var(--radius-xl);
      padding: var(--space-10);
      color: var(--color-white);
    }

    .cta-panel--students {
      background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%);
    }

    .cta-panel__badge {
      display: inline-block;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.25);
      color: var(--color-primary-pale);
      font-size: var(--text-sm);
      font-weight: var(--fw-semibold);
      padding: var(--space-1) var(--space-4);
      border-radius: var(--radius-full);
      margin-bottom: var(--space-5);
    }

    .students-badge {
      color: var(--color-white);
    }

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
      color: rgba(255,255,255,0.8);
      line-height: 1.7;
      margin-bottom: var(--space-8);
    }

    /* Form */
    .cta-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .form-label {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: rgba(255,255,255,0.8);
    }

    .form-input {
      background: rgba(255,255,255,0.1);
      border: 1.5px solid rgba(255,255,255,0.25);
      border-radius: var(--radius-md);
      padding: var(--space-3) var(--space-4);
      font-family: var(--font-body);
      font-size: var(--text-base);
      color: var(--color-white);
      outline: none;
      transition: border-color var(--transition-fast), background var(--transition-fast);
      width: 100%;
    }

    .form-input::placeholder { color: rgba(255,255,255,0.45); }

    .form-input:focus {
      border-color: var(--color-primary-light);
      background: rgba(255,255,255,0.15);
    }

    .form-submit {
      background: var(--color-primary-light);
      color: var(--color-white);
      justify-content: center;
      transition: all var(--transition-base);
    }

    .form-submit:disabled {
      background: rgba(255,255,255,0.2);
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    .students-btn {
      background: var(--color-white);
      color: var(--color-primary-dark);
    }

    .students-btn:hover:not(:disabled) {
      background: var(--color-primary-bg);
    }

    /* Guarantees */
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
      color: rgba(255,255,255,0.75);
    }

    .cta-guarantees li span {
      color: var(--color-primary-pale);
      font-weight: var(--fw-bold);
    }

    /* Student activities preview */
    .cta-student-icons {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      margin-top: var(--space-6);
    }

    .student-activity {
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: var(--radius-full);
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-sm);
      color: var(--color-white);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .cta__container { grid-template-columns: 1fr; }
    }

    @media (max-width: 640px) {
      .cta-panel { padding: var(--space-6); }
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

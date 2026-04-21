import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  bg: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features section" id="explorar" aria-labelledby="features-heading">
      <div class="container">

        <!-- Header -->
        <div class="features__header text-center">
          <span class="section-tag">Características</span>
          <h2 class="section-title" id="features-heading">
            Todo lo que necesitas para gestionar<br>
            el bienestar universitario
          </h2>
          <p class="section-subtitle">
            Una plataforma completa que conecta instituciones con estudiantes,
            optimizando recursos y fomentando el hábito deportivo.
          </p>
        </div>

        <!-- Tabs: Students vs Institutions -->
        <div class="features__tabs" role="tablist" aria-label="Segmentos">
          @for (tab of tabs; track tab.id) {
            <button
              class="tab-btn"
              [class.active]="activeTab === tab.id"
              (click)="setTab(tab.id)"
              role="tab"
              [attr.aria-selected]="activeTab === tab.id"
              [attr.id]="'tab-' + tab.id"
            >
              <span class="tab-icon">{{ tab.icon }}</span>
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Features Grid -->
        <div class="features__grid" role="tabpanel" [attr.aria-labelledby]="'tab-' + activeTab">
          @for (feature of currentFeatures; track feature.title) {
            <article class="feature-card" [attr.aria-label]="feature.title">
              <div class="feature-card__icon" [style.background]="feature.bg">
                <span [style.font-size]="'1.8rem'">{{ feature.icon }}</span>
              </div>
              <div class="feature-card__tag" [style.color]="feature.color">
                {{ feature.tag }}
              </div>
              <h3 class="feature-card__title">{{ feature.title }}</h3>
              <p class="feature-card__desc">{{ feature.description }}</p>
              <div class="feature-card__line" [style.background]="feature.color"></div>
            </article>
          }
        </div>

        <!-- Bottom highlight -->
        <div class="features__highlight">
          <div class="highlight-icon">🤖</div>
          <div class="highlight-content">
            <strong>Potenciado por Inteligencia Artificial</strong>
            <p>Nuestro motor de recomendaciones analiza el calendario académico de cada estudiante para
            sugerir actividades que encajan exactamente con sus horarios libres, maximizando la participación.</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .features {
      background: var(--color-off-white);
    }

    .features__header {
      margin-bottom: var(--space-10);
    }

    /* Tabs */
    .features__tabs {
      display: flex;
      justify-content: center;
      gap: var(--space-3);
      margin-bottom: var(--space-10);
    }

    .tab-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-full);
      font-size: var(--text-base);
      font-weight: var(--fw-semibold);
      color: var(--color-text-secondary);
      background: var(--color-white);
      border: 2px solid var(--color-border);
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
      box-shadow: 0 4px 14px rgba(27, 94, 32, 0.3);
    }

    .tab-icon { font-size: 1.2rem; }

    /* Grid */
    .features__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    /* Feature Card */
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
      width: 56px;
      height: 56px;
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
      letter-spacing: 0.06em;
      margin-bottom: var(--space-2);
    }

    .feature-card__title {
      font-family: var(--font-heading);
      font-size: var(--text-lg);
      font-weight: var(--fw-bold);
      color: var(--color-dark);
      margin-bottom: var(--space-3);
      line-height: 1.3;
    }

    .feature-card__desc {
      font-size: var(--text-sm);
      color: var(--color-text-secondary);
      line-height: 1.6;
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
      padding: var(--space-8);
      display: flex;
      align-items: center;
      gap: var(--space-6);
      color: var(--color-white);
    }

    .highlight-icon {
      font-size: 3rem;
      flex-shrink: 0;
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
      color: rgba(255,255,255,0.8);
      line-height: 1.6;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .features__grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .features__grid { grid-template-columns: 1fr; }

      .features__tabs {
        flex-direction: column;
        align-items: stretch;
      }

      .tab-btn { justify-content: center; }

      .features__highlight { flex-direction: column; text-align: center; }
    }
  `]
})
export class FeaturesComponent {
  activeTab: 'students' | 'institutions' = 'students';

  tabs = [
    { id: 'students' as const, icon: '🎓', label: 'Para Estudiantes' },
    { id: 'institutions' as const, icon: '🏫', label: 'Para Universidades' },
  ];

  studentFeatures: Feature[] = [
    {
      icon: '🤖', title: 'Recomendaciones con IA',
      description: 'Nuestro motor analiza tu calendario académico y sugiere actividades en tus horas libres, maximizando tu bienestar sin afectar tu rendimiento.',
      tag: 'Inteligencia Artificial', color: '#4CAF50', bg: '#E8F5E9'
    },
    {
      icon: '📅', title: 'Reserva en 3 pasos',
      description: 'Explorar → Elegir → Confirmar. Sin papeleos, sin desplazamientos innecesarios. Tu lugar reservado en menos de 30 segundos desde cualquier dispositivo.',
      tag: 'Experiencia sin fricción', color: '#2196F3', bg: '#E3F2FD'
    },
    {
      icon: '🗓️', title: 'Calendario Integrado',
      description: 'Sincroniza tus actividades deportivas con tu agenda académica. Recibe recordatorios automáticos y gestiona tus reservas desde un solo lugar.',
      tag: 'Gestión de tiempo', color: '#9C27B0', bg: '#F3E5F5'
    },
    {
      icon: '🏆', title: 'Sistema de Recompensas',
      description: 'Gana puntos por cada actividad completada, sube de nivel y desbloquea beneficios exclusivos. La constancia se recompensa.',
      tag: 'Gamificación', color: '#FF9800', bg: '#FFF3E0'
    },
    {
      icon: '👥', title: 'Comunidad Universitaria',
      description: 'Únete a grupos de actividad, reta a tus compañeros y comparte tus logros. El deporte es mejor en equipo.',
      tag: 'Social', color: '#F44336', bg: '#FFEBEE'
    },
    {
      icon: '📊', title: 'Seguimiento de Progreso',
      description: 'Visualiza tus estadísticas de actividad, calorías, horas activas y tendencias de bienestar a lo largo del semestre.',
      tag: 'Analytics personal', color: '#00BCD4', bg: '#E0F7FA'
    },
  ];

  institutionFeatures: Feature[] = [
    {
      icon: '📈', title: 'Dashboard en tiempo real',
      description: 'Visualiza en tiempo real la ocupación de espacios, inscripciones activas, tendencias de participación y el impacto del deporte en el rendimiento académico.',
      tag: 'Analytics institucional', color: '#4CAF50', bg: '#E8F5E9'
    },
    {
      icon: '🏟️', title: 'Gestión de Espacios',
      description: 'Administra horarios, capacidades y disponibilidad de todas tus instalaciones deportivas desde un panel centralizado. Elimina conflictos de horarios.',
      tag: 'Operaciones', color: '#2196F3', bg: '#E3F2FD'
    },
    {
      icon: '📋', title: 'Inscripciones automatizadas',
      description: 'Sistema de inscripción automático con listas de espera inteligentes, confirmaciones por email y notificaciones push. Cero carga administrativa.',
      tag: 'Automatización', color: '#9C27B0', bg: '#F3E5F5'
    },
    {
      icon: '📄', title: 'Reportes de impacto',
      description: 'Genera reportes ejecutivos que correlacionan participación deportiva con rendimiento académico. Justifica la inversión ante directivos y rectoría.',
      tag: 'Business Intelligence', color: '#FF9800', bg: '#FFF3E0'
    },
    {
      icon: '🔒', title: 'Control de acceso',
      description: 'Gestiona permisos, verifica afiliaciones estudiantiles y controla el acceso a instalaciones con códigos QR o integración con sistemas universitarios.',
      tag: 'Seguridad', color: '#F44336', bg: '#FFEBEE'
    },
    {
      icon: '⚙️', title: 'Integración con sistemas ERP',
      description: 'Conéctate con Banner, PeopleSoft, SAP y otros sistemas universitarios. Sincroniza datos de matrícula, horarios académicos y calendarios institucionales.',
      tag: 'Integración tecnológica', color: '#607D8B', bg: '#ECEFF1'
    },
  ];

  get currentFeatures(): Feature[] {
    return this.activeTab === 'students' ? this.studentFeatures : this.institutionFeatures;
  }

  setTab(tab: 'students' | 'institutions'): void {
    this.activeTab = tab;
  }
}

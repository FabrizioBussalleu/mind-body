# Mind&Body TM — Landing Page
## Curso 1ACC0236-202610 | Sprint 1

Plataforma de gestión deportiva universitaria con IA.

### Equipo
| Integrante | Rol |
|---|---|
| Fabrizio Bussalleu Salcedo | Dev Frontend / Prototipado |
| Carlos Alejandro Colfer Mendoza | Dev Frontend / Angular |
| Ricardo Martin Tejada Ramírez | Documentación / Informe |
| Joaquín Sebastian Ruiz Ramírez | Documentación / QA |

### Tech Stack
- Angular 21 (Standalone Components, no NgModules)
- Signals API + `provideExperimentalZonelessChangeDetection()`
- CSS Custom Properties (Design Tokens)
- TypeScript 5.6

### Instrucciones de ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm start
# → http://localhost:4200

# 3. Build de producción
npm run build
```

### Estructura del proyecto
```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Navegación sticky + hamburger móvil
│   │   ├── hero/           # Hero section con dashboard mockup
│   │   ├── features/       # Grid de características con tabs
│   │   ├── how-it-works/   # Proceso en 3 pasos
│   │   ├── cta/            # Formularios de conversión
│   │   └── footer/         # Footer completo
│   ├── app.component.ts    # Root component
│   ├── app.config.ts       # Configuración (zoneless, router)
│   └── app.routes.ts       # Rutas
├── styles.css              # Design tokens + estilos globales
├── index.html
└── main.ts
```

### GitFlow
- `main` — producción estable
- `develop` — integración continua
- `feature/hero` — US-01, US-05
- `feature/features-section` — US-02
- `feature/cta-footer` — US-03, US-04
- `feature/deploy-cicd` — US-06

### URL de deploy
https://mind-body-1acc0236.netlify.app

### User Stories completadas en Sprint 1
- [x] US-01: Hero Section con propuesta de valor (5 SP)
- [x] US-02: Sección de características/features (3 SP)
- [x] US-03: Sección CTA principal (3 SP)
- [x] US-04: Footer con información de contacto (2 SP)
- [x] US-05: Navbar responsive (3 SP)
- [x] US-06: CI/CD con Netlify + GitHub (4 SP)
**Total: 20 Story Points — 100% completado**

import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled()">
      <div class="container navbar__inner">

        <!-- Logo -->
        <a href="#" class="navbar__logo" aria-label="Mind&Body Home">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#4CAF50"/>
            <path d="M8 22 C8 22 10 14 16 14 C22 14 24 22 24 22"
                  stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <circle cx="16" cy="10" r="3" fill="white"/>
          </svg>
          <span class="logo-text">
            <span class="logo-mind">Mind</span><span class="logo-body">&amp;Body</span><sup class="logo-tm">TM</sup>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="navbar__nav" aria-label="Navegación principal">
          <a href="#inicio"        class="nav-link">Inicio</a>
          <a href="#explorar"      class="nav-link">Explorar</a>
          <a href="#como-funciona" class="nav-link">Cómo funciona</a>
          <a href="#universidades" class="nav-link">Universidades</a>
        </nav>

        <!-- Desktop Actions -->
        <div class="navbar__actions">
          <a href="https://mind-body-web.netlify.app/auth/login" class="btn btn-primary btn-sm">Acceder</a>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="navbar__hamburger"
          [class.active]="menuOpen()"
          (click)="toggleMenu()"
          aria-label="Abrir menú"
          [attr.aria-expanded]="menuOpen()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!--
      Mobile menu lives OUTSIDE the <header> so it never inflates the 72px bar.
      position:fixed + top:72px anchors it right below the navbar.
    -->
    <div
      class="mobile-menu"
      [class.open]="menuOpen()"
      role="dialog"
      aria-label="Menú móvil"
      [attr.aria-hidden]="!menuOpen()"
    >
      <nav class="mobile-menu__nav">
        <a href="#inicio"        class="mobile-link" (click)="closeMenu()">Inicio</a>
        <a href="#explorar"      class="mobile-link" (click)="closeMenu()">Explorar</a>
        <a href="#como-funciona" class="mobile-link" (click)="closeMenu()">Cómo funciona</a>
        <a href="#universidades" class="mobile-link" (click)="closeMenu()">Universidades</a>
      </nav>
      <div class="mobile-menu__actions">
        <a href="https://mind-body-web.netlify.app/auth/login" class="btn btn-primary" (click)="closeMenu()">Acceder</a>
      </div>
    </div>
  `,
  styles: [`
    /* ─── Bar — always exactly 72px ─────────────────────────────── */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 72px;                 /* hard-coded — never grows */
      background: transparent;
      transition: background var(--transition-base), box-shadow var(--transition-base);
    }

    .navbar.scrolled {
      background: var(--color-primary-dark);
      box-shadow: 0 2px 20px rgba(0,0,0,0.22);
    }

    .navbar__inner {
      display: flex;
      align-items: center;
      height: 100%;                 /* fill the 72px */
      gap: var(--space-8);
    }

    /* ─── Logo ───────────────────────────────────────────────────── */
    .navbar__logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      flex-shrink: 0;
      text-decoration: none;
    }

    .logo-text {
      font-family: var(--font-heading);
      font-size: var(--text-xl);
      font-weight: var(--fw-bold);
      color: var(--color-white);
      line-height: 1;
    }

    .logo-mind { color: var(--color-white); }
    .logo-body { color: var(--color-primary-pale); }
    .logo-tm   { font-size: 0.55em; color: var(--color-primary-pale); vertical-align: super; }

    /* ─── Desktop nav ────────────────────────────────────────────── */
    .navbar__nav {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      margin-left: auto;
    }

    .nav-link {
      font-size: var(--text-sm);
      font-weight: var(--fw-medium);
      color: rgba(255,255,255,0.82);
      transition: color var(--transition-fast);
      position: relative;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-primary-light);
      transition: width var(--transition-base);
    }

    .nav-link:hover { color: var(--color-white); }
    .nav-link:hover::after { width: 100%; }

    /* ─── Desktop actions ────────────────────────────────────────── */
    .navbar__actions {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .btn-sm {
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-sm);
    }

    /* ─── Hamburger button ───────────────────────────────────────── */
    .navbar__hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      padding: var(--space-2);
      margin-left: auto;
      cursor: pointer;
      flex-shrink: 0;
    }

    .navbar__hamburger span {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--color-white);
      border-radius: var(--radius-full);
      transition: transform var(--transition-base), opacity var(--transition-base);
      transform-origin: center;
    }

    .navbar__hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .navbar__hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .navbar__hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ─── Mobile drop-down menu ──────────────────────────────────── */
    /*
     * Sits completely OUTSIDE the header flow.
     * position:fixed + top:72px = anchored right below the 72px bar.
     * Invisible and non-interactive until .open is applied.
     */
    .mobile-menu {
      display: none;                /* hidden on desktop */
    }

    .mobile-menu__nav {
      display: flex;
      flex-direction: column;
    }

    .mobile-link {
      display: block;
      padding: var(--space-3) 0;
      font-size: var(--text-base);
      font-weight: var(--fw-medium);
      color: rgba(255,255,255,0.82);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      transition: color var(--transition-fast);
    }

    .mobile-link:hover { color: var(--color-primary-light); }

    .mobile-menu__actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      margin-top: var(--space-5);
      padding-bottom: var(--space-2);
    }

    .mobile-menu__actions .btn { justify-content: center; }

    /* ─── Responsive ─────────────────────────────────────────────── */
    @media (max-width: 768px) {
      .navbar__nav,
      .navbar__actions   { display: none; }
      .navbar__hamburger { display: flex; }

      /* Mobile menu: fixed below the bar, slides in/out */
      .mobile-menu {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        z-index: 999;
        background: var(--color-primary-dark);
        padding: var(--space-4) var(--space-5) var(--space-6);
        border-top: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 8px 24px rgba(0,0,0,0.22);
        /* Start off-screen and invisible */
        opacity: 0;
        transform: translateY(-8px);
        pointer-events: none;
        transition: opacity var(--transition-base), transform var(--transition-base);
      }

      .mobile-menu.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen  = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu():  void { this.menuOpen.set(false); }
}

/* ══════════════════════════════════════════════════════════
   2A Educação — Shared JavaScript
   ══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── NAV SCROLL BEHAVIOUR ─────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── HAMBURGER / MOBILE DRAWER ────────────────────────── */
  const hamburger    = document.getElementById('hamburger');
  const mobileNav    = document.getElementById('mobileNav');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function closeDrawer() {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    drawerOverlay?.classList.remove('open');
    document.body.style.overflow = '';
    hamburger?.setAttribute('aria-expanded', 'false');
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      hamburger.classList.add('open');
      mobileNav.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  drawerOverlay?.addEventListener('click', closeDrawer);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ─── MODAL SYSTEM ──────────────────────────────────────── */
  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
    el.querySelector('.modal-close')?.focus();
  }

  function closeModal(el) {
    el.classList.remove('open');
    if (!document.querySelector('.modal-overlay.open')) {
      document.body.style.overflow = '';
    }
  }

  /* Expose globally so inline onclick attributes can call them */
  window.openYouthModal   = (e) => { e?.preventDefault(); openModal('modalYouth'); };
  window.openCompanyModal = (e) => { e?.preventDefault(); openModal('modalCompany'); };

  /* Close on overlay click */
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  /* Close on X button */
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });

  /* ─── FORMSPREE AJAX ────────────────────────────────────── */
  function setupForm(formId, successId) {
    const form    = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      try {
        const res = await fetch('https://formspree.io/f/mdapdonj', {
          method:  'POST',
          body:    new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          if (success) {
            form.style.display = 'none';
            success.classList.add('visible');
          } else {
            btn.textContent = 'Enviado!';
          }
        } else {
          btn.disabled = false;
          btn.textContent = 'Erro — tente novamente';
          setTimeout(() => (btn.textContent = orig), 3000);
        }
      } catch {
        btn.disabled = false;
        btn.textContent = orig;
      }
    });
  }

  /* Wire all forms on the page */
  setupForm('formYouth',          'formYouthSuccess');
  setupForm('formCompany',        'formCompanySuccess');
  setupForm('formContactYouth',   'formContactYouthSuccess');
  setupForm('formContactCompany', 'formContactCompanySuccess');
  setupForm('formWaitlist',       'formWaitlistSuccess');

  /* ─── INTERSECTION OBSERVER — REVEAL ───────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  }

  /* ─── COUNTER ANIMATION ─────────────────────────────────── */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const prefix   = el.dataset.prefix  || '';
    const suffix   = el.dataset.suffix  || '';
    const duration = 1500;
    const start    = performance.now();

    const step = now => {
      const t   = Math.min((now - start) / duration, 1);
      const val = Math.round(easeOutCubic(t) * target);
      el.textContent = prefix + val.toLocaleString('pt-BR') + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

})();

// ── Mobile nav ──
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Scroll reveal ──
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}

// ── Waitlist form ──
const form = document.getElementById('waitlistForm');
const success = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('wf-email').value;
    const name  = document.getElementById('wf-name').value;
    const mkt   = document.getElementById('wf-market').value;
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem('hrv_leads') || '[]');
    leads.push({ name, email, market: mkt, ts: new Date().toISOString() });
    localStorage.setItem('hrv_leads', JSON.stringify(leads));
    form.style.display = 'none';
    if (success) success.style.display = 'flex';
  });
}

// ── Animate score ring on load ──
window.addEventListener('load', () => {
  const circle = document.querySelector('.score-ring circle:last-child');
  if (!circle) return;
  circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
});

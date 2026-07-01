// ── Mobile nav toggle ──
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Waitlist form ──
const form = document.getElementById('waitlistForm');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!email) return;

    // Store locally — swap this for your real form endpoint (Formspree, Netlify Forms, etc.)
    const existing = JSON.parse(localStorage.getItem('havenrock_waitlist') || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem('havenrock_waitlist', JSON.stringify(existing));
    }

    form.style.display = 'none';
    if (successMsg) successMsg.style.display = 'flex';
  });
}

// ── Scroll-reveal (lightweight, no library) ──
const revealEls = document.querySelectorAll('[data-reveal]');

if (revealEls.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.revealed, [data-reveal]').forEach(el => {
    if (el.classList.contains('revealed')) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });
});

// Class toggled by IntersectionObserver
document.head.insertAdjacentHTML('beforeend', `
<style>
  [data-reveal].revealed {
    opacity: 1 !important;
    transform: none !important;
  }
</style>
`);

// =====================
// JJ Portfolio — Main JS
// =====================

// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('hide'), 900);
});

// AOS
AOS.init({ once: true, duration: 700 });

// ============================
// Site Config
// ============================
const SITE_CONFIG = {
  repoURL: 'https://mynameisjj-001.github.io/Portfolio/',
  email: 'jj.olakunle.dev@gmail.com',
  phoneLocal: '07072184059',
  phoneIntl: '+2347072184059',
  cvPath: 'assets/JJ-CV.pdf',
  emailjs: { userId: '', serviceId: '', templateId: '' }
};

// ============================
// Init Floating CTAs
// ============================
function initCTAs() {
  const waBtn = document.getElementById('whatsapp-btn');
  const callBtn = document.getElementById('call-btn');
  const mailBtn = document.getElementById('mail-btn');

  const waNumber = SITE_CONFIG.phoneIntl || SITE_CONFIG.phoneLocal;
  const waMessage = encodeURIComponent(
    'Hello Joseph, I saw your portfolio and would like to get in touch.'
  );

  if (waBtn) waBtn.href = `https://wa.me/${waNumber.replace(/\D/g,'')}?text=${waMessage}`;
  if (callBtn) callBtn.href = `tel:${SITE_CONFIG.phoneIntl || SITE_CONFIG.phoneLocal}`;
  if (mailBtn) mailBtn.href = `mailto:${SITE_CONFIG.email}`;
}
window.addEventListener('DOMContentLoaded', initCTAs);

// ============================
// Navbar progress
// ============================
(function () {
  const progressEl = document.getElementById('nav-progress');

  function updateNavProgress() {
    if (!progressEl) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (height > 0) ? (scrollTop / height) * 100 : 0;
    progressEl.style.width = percent + '%';
  }

  window.addEventListener('scroll', updateNavProgress, { passive: true });
  window.addEventListener('resize', updateNavProgress);
  updateNavProgress();
})();

// =====================
// Theme toggle (Bulb version)
// =====================
(function themeToggle() {
  const bulb = document.getElementById('bulb-toggle');
  const html = document.documentElement;
  const KEY = 'jj-theme';

  const apply = (mode) => html.setAttribute('data-bs-theme', mode);

  // Load saved theme
  const saved = localStorage.getItem(KEY);
  apply(saved || 'light');

  // Toggle on click/touch
  if (bulb) {
    ["click", "touchstart"].forEach(evt => {
      bulb.addEventListener(evt, (e) => {
        e.preventDefault();
        const current = html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        apply(next);
        localStorage.setItem(KEY, next);
      });
    });
  }
})();

// =====================
// Auto-highlight active nav link
// =====================
(function activeNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// =====================
// Footer year
// =====================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =====================
// Contact form -> WhatsApp redirect
// =====================
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const phone = '2348112052659'; // your WhatsApp
    const text = `Hi JJ, my name is ${name}.%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  });
})();

// ============================
// Greeting + Subtyped (Typed.js)
// ============================
(function () {
  function startTypedSequence() {
    console.log("Starting greeting...");
  new Typed('#greeting', {
  strings: ["Hi👋, I’m JJ — Graphics Designer and Web Creator."],
  typeSpeed: 50,
  showCursor: true,
  cursorChar: '|',
  onComplete: (self) => {
    if (self && self.cursor) self.cursor.style.display = 'none'; // hide cursor
    setTimeout(startSubtyped, 400);
  }
});

  }

  function startSubtyped() {
    console.log("Starting subtyped...");
    new Typed('#subtyped', {
      strings: ["I design, I create, I bring ideas to life."],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      onComplete: (self) => {
        console.log("Subtyped done!");
        if (self && self.cursor) self.cursor.style.display = 'none';
      }
    });
  }

  window.addEventListener('load', function () {
    console.log("Window loaded, starting sequence...");
    setTimeout(startTypedSequence, 1600);
  });
})();

// =====================
// JJ Portfolio — Main JS
// =====================

// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('hide'), 200);
});

// AOS
AOS.init({ once: true, duration: 700 });

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const progress = document.getElementById("scroll-progress");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progress.style.width = scrollPercent + "%";
});

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
  if (saved) {
    apply(saved);
  } else {
    apply('light'); // default theme
  }

  // Toggle on click
if (bulb) {
  ["click", "touchstart"].forEach(evt => {
    bulb.addEventListener(evt, (e) => {
      e.preventDefault(); // prevent ghost clicks on touch
      const current = html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      apply(next);
      localStorage.setItem(KEY, next);
    });
  });
}

// Auto-highlight active nav link
(function activeNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// Footer year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Contact form -> WhatsApp redirect
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    // EDIT: WhatsApp phone (already set)
    const phone = '2348112052659';
    const text = `Hi JJ, my name is ${name}.%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  });
})();

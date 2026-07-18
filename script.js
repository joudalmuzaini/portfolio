// ============================================================
// سنة الفوتر التلقائية
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// تأثير الكتابة داخل الترمينال (Hero)
// ============================================================
function typeLine(el, text, speed = 45) {
  return new Promise((resolve) => {
    let i = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      el.textContent = text;
      resolve();
      return;
    }
    const timer = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runTerminalIntro() {
  const nameEl = document.getElementById('typedName');
  const roleEl = document.getElementById('typedRole');
  if (!nameEl || !roleEl) return;

  await typeLine(nameEl, 'joud-almuzaini');
  await new Promise((r) => setTimeout(r, 250));
  await typeLine(roleEl, 'Data · Software · AI · Cybersecurity.');
}

runTerminalIntro();

// ============================================================
// قائمة الجوال (Nav toggle)
// ============================================================
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}



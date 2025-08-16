// ———————————————————————————————
// 1. FORMULARIO DE CONTACTO
// ———————————————————————————————
const form = document.getElementById('form-contacto');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre  = form.nombre?.value.trim();
    const email   = form.email?.value.trim();
    const mensaje = form.mensaje?.value.trim();

    if (!nombre || !email || !mensaje) {
      showMessage('⚠️ Por favor completa todos los campos.', 'error');
      return;
    }

    showMessage('✅ ¡Formulario enviado con éxito!', 'success');
    form.reset();
  });
}

// ———————————————————————————————
// 2. BOTÓN DE TEMA (DARK / LIGHT)
// ———————————————————————————————
const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.title = "Cambiar tema";
document.body.appendChild(themeToggle);

function updateThemeIcon() {
  themeToggle.style.backgroundImage = document.body.classList.contains('light-mode')
    ? 'url(imagenes/noche.png)'
    : 'url(imagenes/dia.png)';
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateThemeIcon();
});

// ———————————————————————————————
// 3. SCROLL REVEAL
// ———————————————————————————————
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerPoint) {
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// ———————————————————————————————
// 4. MENSAJES DE FEEDBACK
// ———————————————————————————————
function showMessage(text, type = 'info') {
  let box = document.createElement('div');
  box.className = `msg-box ${type}`;
  box.textContent = text;

  document.body.appendChild(box);

  setTimeout(() => {
    box.classList.add('show');
  }, 50);

  setTimeout(() => {
    box.classList.remove('show');
    setTimeout(() => box.remove(), 300);
  }, 3000);
}

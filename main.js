// ─── CUSTOM CURSOR ───────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width       = '52px';
    ring.style.height      = '52px';
    ring.style.borderColor = 'var(--purple)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width       = '36px';
    ring.style.height      = '36px';
    ring.style.borderColor = 'rgba(124,92,252,0.5)';
  });
});

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
const skills = [
  'UI Design','UX Research','Figma','HTML & CSS','JavaScript',
  'Prototipado','Wireframing','Diseño Web','Front-end',
  'Accesibilidad','Diseño Responsivo','Interacción'
];
const track = document.getElementById('marqueeTrack');
[...skills, ...skills].forEach(s => {
  track.innerHTML += `<div class="marquee-item"><span class="m-dot"></span>${s}</div>`;
});

// ─── PROYECTOS DESTACADOS ─────────────────────────────────────────────────────
const projects = [
  {
    icon: '🦷',
    name: 'Dental Care',
    desc: 'Prototipo de landing page para servicios odontológicos con enfoque en estética dental y confianza.',
    link: 'https://jeanfa0.github.io/dental-landing-test/',
    tags: ['Salud', 'UI']
  },
  {
    icon: '🌿',
    name: 'Tingo María Tours',
    desc: 'Guía turística de la selva peruana. (Proyecto actualmente inconcluso y en fase de desarrollo).',
    link: 'https://jeanfa0.github.io/campus_shop/',
    tags: ['Turismo', 'WIP']
  },
  {
    icon: '🏋️',
    name: 'IronForge Studio',
    desc: 'Prototipo de gimnasio de alto rendimiento con planes de entrenamiento y nutrición personalizada.',
    link: 'https://jeanfa0.github.io/proyecto2/',
    tags: ['Fitness', 'Elite']
  },
  {
    icon: '🌐',
    name: 'Nexus Summit 2026',
    desc: 'Concepto de landing page para una conferencia tecnológica internacional sobre IA y Web3.',
    link: 'https://jeanfa0.github.io/proyecto3/',
    tags: ['Tech', 'Events']
  },
  {
    icon: '🍷',
    name: 'Sabor & Brasa',
    desc: 'Maqueta para restaurante de alta cocina de autor con sistema de reservas y carta gourmet.',
    link: 'https://jeanfa0.github.io/proyecto4/',
    tags: ['Gourmet', 'Chef']
  },
  {
    icon: '🛡️',
    name: 'Vortex Cloud',
    desc: 'Prototipo de plataforma SaaS para infraestructura cloud y ciberseguridad avanzada.',
    link: 'https://jeanfa0.github.io/proyecto5/',
    tags: ['SaaS', 'Cloud']
  },
  {
    icon: '🏎️',
    name: 'Apex Auto Detail',
    desc: 'Maqueta de centro especializado en estética automotriz y mecánica de precisión.',
    link: 'https://jeanfa0.github.io/proyecto6/',
    tags: ['Autos', 'Detailing']
  },
  {
    icon: '⚖️',
    name: 'LexVanguard',
    desc: 'Concepto de sitio corporativo para un estudio jurídico especializado en derecho corporativo.',
    link: 'https://jeanfa0.github.io/proyecto7/',
    tags: ['Legal', 'Derecho']
  },
  {
    icon: '⚡',
    name: 'Fluxo AI',
    desc: 'Prototipo de automatización de flujos de trabajo impulsado por Inteligencia Artificial.',
    link: 'https://jeanfa0.github.io/proyecto8/',
    tags: ['AI', 'Automation']
  },
  {
    icon: '🏥',
    name: 'VidaEnCasa',
    desc: 'Portal de bienestar con recursos de bioseguridad, salud familiar y educación a distancia.',
    link: 'https://jeanfa0.github.io/pandemia/',
    tags: ['Salud', 'Educación']
  },
];

const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  const card = document.createElement('a');
  card.href             = p.link;
  card.target           = '_blank';
  card.rel              = 'noopener noreferrer';
  card.className        = 'project-card reveal';
  card.innerHTML = `
    <div class="card-top">
      <div class="card-icon">${p.icon}</div>
      <div class="card-arrow">↗</div>
    </div>
    <div class="card-name">${p.name}</div>
    <p class="card-desc">${p.desc}</p>
    <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
  `;
  grid.appendChild(card);
});

// ─── PROYECTOS EN CLASE ───────────────────────────────────────────────────────
const claseProjects = [
  {
    icon: '📝',
    name: 'Práctica 01 — HTML Básico',
    desc: 'Estructura semántica de una página web usando etiquetas HTML5 fundamentales: encabezados, párrafos, listas y enlaces.',
    link: '#',
    tags: ['HTML', 'Semántica']
  },
  {
    icon: '🎨',
    name: 'Práctica 02 — Estilos CSS',
    desc: 'Aplicación de selectores, colores, tipografías y el modelo de caja (box model) para estilizar contenido HTML.',
    link: '#',
    tags: ['CSS', 'Box Model']
  },
  {
    icon: '📐',
    name: 'Práctica 03 — Flexbox',
    desc: 'Maquetación de layouts responsivos utilizando Flexbox para alinear y distribuir elementos en la página.',
    link: '#',
    tags: ['CSS', 'Flexbox', 'Layout']
  },
  {
    icon: '🧱',
    name: 'Práctica 04 — CSS Grid',
    desc: 'Creación de grillas bidimensionales con CSS Grid para estructurar secciones complejas de manera ordenada.',
    link: '#',
    tags: ['CSS', 'Grid']
  },
  {
    icon: '🖱️',
    name: 'Práctica 05 — JavaScript DOM',
    desc: 'Manipulación del DOM con JavaScript: selección de elementos, eventos y cambios dinámicos en el contenido.',
    link: '#',
    tags: ['JavaScript', 'DOM']
  },
  {
    icon: '📱',
    name: 'Práctica 06 — Diseño Responsivo',
    desc: 'Implementación de media queries para adaptar el diseño a distintos tamaños de pantalla: mobile, tablet y desktop.',
    link: '#',
    tags: ['CSS', 'Responsive', 'Media Queries']
  },
];

const claseGrid = document.getElementById('clase-grid');
claseProjects.forEach(p => {
  const card = document.createElement('a');
  card.href      = p.link;
  card.target    = '_blank';
  card.rel       = 'noopener noreferrer';
  card.className = 'clase-card reveal';
  card.innerHTML = `
    <div class="card-top">
      <div class="card-icon">${p.icon}</div>
      <div class="card-arrow">↗</div>
    </div>
    <span class="clase-badge">📚 Clase</span>
    <div class="card-name">${p.name}</div>
    <p class="card-desc">${p.desc}</p>
    <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
  `;
  claseGrid.appendChild(card);
});

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 60);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

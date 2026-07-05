// ===== APP.JS — TOKOPI Menu Catalog =====

let currentModal = null;

// ---- FORMAT PRICE ----
function fmt(price) { return price; }

// ---- BUILD CARD ----
function buildCard(item, cat) {
  const card = document.createElement('article');
  card.className = 'menu-card';
  card.dataset.id = item.id;
  card.dataset.cat = cat;

  const badgeHtml = item.badge
    ? `<span class="card-badge">${item.badge}</span>`
    : '';

  const imgHtml = item.img
    ? `<img class="card-img" src="${item.img}" alt="${item.nama}" loading="lazy" decoding="async">`
    : `<div class="card-img-placeholder">${item.emoji}</div>`;

  card.innerHTML = `
    <div class="card-img-wrap">
      ${imgHtml}
      ${badgeHtml}
    </div>
    <div class="card-body">
      <h3 class="card-name">${item.nama}</h3>
      <p class="card-desc">${item.desc}</p>
      <div class="card-footer">
        <span class="card-price">${fmt(item.harga)}</span>
        <span class="card-tag">${item.tag}</span>
      </div>
    </div>`;

  card.addEventListener('click', () => openModal(item, cat));
  return card;
}

// ---- RENDER ALL CARDS ----
function renderMenu() {
  const makGrid = document.getElementById('grid-makanan');
  const minGrid = document.getElementById('grid-minuman');

  MENU.makanan.forEach(item => makGrid.appendChild(buildCard(item, 'makanan')));
  MENU.minuman.forEach(item => minGrid.appendChild(buildCard(item, 'minuman')));
}

// ---- FILTER ----
function filterMenu(cat, btn) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const allCards = document.querySelectorAll('.menu-card');
  let count = 0;

  allCards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
      count++;
    } else {
      card.classList.add('hidden');
    }
  });

  // Show/hide category headers
  ['makanan','minuman'].forEach(c => {
    const block = document.getElementById(`cat-${c}`);
    if (cat === 'all' || cat === c) {
      block.style.display = '';
    } else {
      block.style.display = 'none';
    }
  });

  document.getElementById('navCount').textContent = `${count} Item`;
}

// ---- MODAL ----
function openModal(item, cat) {
  const overlay = document.getElementById('modalOverlay');
  const catLabel = cat === 'makanan' ? '🍽️ Makanan' : '🥤 Minuman';

  const imgHtml = item.img
    ? `<img class="modal-img" src="${item.img}" alt="${item.nama}" loading="lazy">`
    : `<div class="modal-img-placeholder" style="background:linear-gradient(135deg,#f2f2f2,#e8e8e8);font-size:5rem;display:flex;align-items:center;justify-content:center;">${item.emoji}</div>`;

  const badgeHtml = item.badge
    ? `<span class="modal-badge">${item.badge}</span>`
    : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img-wrap">
      ${imgHtml}
      <button class="modal-close" onclick="closeModal()" aria-label="Tutup">✕</button>
    </div>
    <div class="modal-body">
      <p class="modal-cat">${catLabel}</p>
      <h2 class="modal-name">${item.nama}</h2>
      <p class="modal-desc">${item.desc}</p>
      <div class="modal-price-row">
        <span class="modal-price">${fmt(item.harga)}</span>
        ${badgeHtml}
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  currentModal = overlay;
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards in same frame
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        const delay = (idx % 4) * 60;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

  document.querySelectorAll('.menu-card').forEach(card => observer.observe(card));
}

// ---- STICKY NAV SCROLL EFFECT ----
function initStickyNav() {
  const nav = document.getElementById('stickyNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ---- MODAL OVERLAY CLICK TO CLOSE ----
function initModalClose() {
  const overlay = document.getElementById('modalOverlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initScrollReveal();
  initStickyNav();
  initModalClose();
});

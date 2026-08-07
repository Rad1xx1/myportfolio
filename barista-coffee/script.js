/* =========================================================
   Barista Coffee — Frontend Logic
   Products, filters, cart, sliders, forms
   ========================================================= */

/* ---------- PRODUCT DATA ---------- */
const products = [
  {
    id: 1,
    name: 'Бразилия Сантос',
    category: 'coffee',
    price: 4500,
    oldPrice: 5200,
    popular: 98,
    image: 'https://static.tildacdn.pro/tild3238-6262-4031-b134-396462616139/photo.jpg',
    desc: 'Насыщенный кофе с нотами шоколада и орехов. 100% арабика, средняя обжарка.',
    badge: 'Хит'
  },
  {
    id: 2,
    name: 'Эфиопия Иргачефф',
    category: 'coffee',
    price: 5200,
    popular: 95,
    image: 'https://static.tildacdn.pro/tild6463-3039-4138-b461-373537343266/IMG_2940.jpg',
    desc: 'Цветочный кофе с цитрусовыми нотами и ягодным послевкусием.',
    badge: 'Популярный'
  },
  {
    id: 3,
    name: 'Колумбия Супремо',
    category: 'coffee',
    price: 4800,
    popular: 90,
    image: 'https://static.tildacdn.pro/tild3063-6537-4662-b863-396639393261/IMG_2939.jpg',
    desc: 'Сбалансированный вкус с карамельной сладостью и лёгкой кислинкой.',
    badge: ''
  },
  {
    id: 4,
    name: 'Кениа АА',
    category: 'coffee',
    price: 5600,
    popular: 88,
    image: 'https://static.tildacdn.pro/tild3335-6365-4565-b864-313736636638/untitled-3091.jpg',
    desc: 'Яркий кофе с черносмородиновыми нотами и виноградной кислинкой.',
    badge: 'Новинка'
  },
  {
    id: 5,
    name: 'Керамическая чашка',
    category: 'accessories',
    price: 2900,
    popular: 82,
    image: 'https://static.tildacdn.pro/tild3232-6339-4435-b565-393965343065/IMG_7862.jpg',
    desc: 'Стильная керамическая чашка 300 мл с логотипом Barista Coffee.',
    badge: ''
  },
  {
    id: 6,
    name: 'Турка медная',
    category: 'accessories',
    price: 6500,
    popular: 76,
    image: 'https://static.tildacdn.pro/tild3638-3064-4838-b338-383765316364/IMG_7865.jpg',
    desc: 'Медная турка ручной работы для приготовления кофе по-восточному.',
    badge: 'Хит'
  },
  {
    id: 7,
    name: 'Кофемолка ручная',
    category: 'accessories',
    price: 8900,
    popular: 70,
    image: 'https://static.tildacdn.pro/tild3066-6532-4965-a161-336433346162/_DSC4759.jpg',
    desc: 'Керамические жернова для идеального помола вашего кофе.',
    badge: ''
  },
  {
    id: 8,
    name: 'Рожковая кофемашина',
    category: 'machines',
    price: 89000,
    popular: 92,
    image: 'https://static.tildacdn.pro/tild3939-6361-4439-b164-653365363338/_DSC4622.jpeg',
    desc: 'Полуавтоматическая кофемашина для дома и офиса. 15 бар давления.',
    badge: 'Популярный'
  },
  {
    id: 9,
    name: 'Автоматическая кофемашина',
    category: 'machines',
    price: 145000,
    popular: 85,
    image: 'https://static.tildacdn.pro/tild3238-6262-4031-b134-396462616139/photo.jpg',
    desc: 'Полностью автоматическое приготовление эспрессо, капучино и латте.',
    badge: 'Премиум'
  },
  {
    id: 10,
    name: 'Капсульная кофемашина',
    category: 'machines',
    price: 35000,
    popular: 78,
    image: 'https://static.tildacdn.pro/tild6463-3039-4138-b461-373537343266/IMG_2940.jpg',
    desc: 'Компактная капсульная кофемашина для быстрого кофе.',
    badge: ''
  },
  {
    id: 11,
    name: 'Капучинатор',
    category: 'accessories',
    price: 4200,
    popular: 65,
    image: 'https://static.tildacdn.pro/tild3063-6537-4662-b863-396639393261/IMG_2939.jpg',
    desc: 'Ручной капучинатор для пышной молочной пены.',
    badge: ''
  },
  {
    id: 12,
    name: 'Кофе в зёрнах 1 кг',
    category: 'coffee',
    price: 7800,
    popular: 94,
    image: 'https://static.tildacdn.pro/tild3335-6365-4565-b864-313736636638/untitled-3091.jpg',
    desc: 'Фирменная смесь Barista Coffee для эспрессо и капучино.',
    badge: 'Хит'
  }
];

/* ---------- RENTAL DATA ---------- */
const rentalMachines = [
  {
    id: 1,
    name: 'DeLonghi Magnifica S',
    brand: 'DeLonghi',
    power: '1450 Вт',
    volume: '1.8 л',
    price: '45 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild3238-6262-4031-b134-396462616139/photo.jpg',
    badge: 'Для офиса'
  },
  {
    id: 2,
    name: 'Jura E8',
    brand: 'Jura',
    power: '1450 Вт',
    volume: '2.4 л',
    price: '78 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild6463-3039-4138-b461-373537343266/IMG_2940.jpg',
    badge: 'Премиум'
  },
  {
    id: 3,
    name: 'Saeco Xelsis',
    brand: 'Saeco',
    power: '1500 Вт',
    volume: '2.0 л',
    price: '62 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild3063-6537-4662-b863-396639393261/IMG_2939.jpg',
    badge: 'Для кафе'
  },
  {
    id: 4,
    name: 'Philips 3200',
    brand: 'Philips',
    power: '1500 Вт',
    volume: '1.8 л',
    price: '38 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild3335-6365-4565-b864-313736636638/untitled-3091.jpg',
    badge: 'Для офиса'
  },
  {
    id: 5,
    name: 'Gaggia Anima',
    brand: 'Gaggia',
    power: '1400 Вт',
    volume: '1.5 л',
    price: '35 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild3238-6262-4031-b134-396462616139/photo.jpg',
    badge: 'Бюджетный'
  },
  {
    id: 6,
    name: 'Siemens EQ.9',
    brand: 'Siemens',
    power: '1500 Вт',
    volume: '2.0 л',
    price: '72 000 ₸/мес',
    image: 'https://static.tildacdn.pro/tild6463-3039-4138-b461-373537343266/IMG_2940.jpg',
    badge: 'Премиум'
  }
];

/* ---------- STATE ---------- */
let cart = [];
let currentRentalMachine = null;

/* ---------- HELPERS ---------- */
const formatPrice = (num) => num.toLocaleString('ru-RU') + ' ₸';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts(list) {
  const grid = $('#productsGrid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '';
    $('#emptyState').hidden = false;
    return;
  }

  $('#emptyState').hidden = true;

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-media">
        ${p.badge ? `<span class="product-badge ${p.popular >= 90 ? 'product-badge--popular' : ''}">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-category">${categoryName(p.category)}</span>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="btn-buy" data-add="${p.id}" aria-label="Добавить ${p.name} в корзину">Купить</button>
        </div>
      </div>
    </article>
  `).join('');
}

function categoryName(cat) {
  return { coffee: 'Кофе', accessories: 'Аксессуары', machines: 'Аппараты' }[cat] || cat;
}

/* ---------- FILTERING ---------- */
function getFilteredProducts() {
  const search = $('#searchInput').value.trim().toLowerCase();
  const category = $('#categoryFilter').value;
  const min = parseFloat($('#minPrice').value) || 0;
  const max = parseFloat($('#maxPrice').value) || Infinity;
  const sort = $('#sortFilter').value;

  let result = products.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search);
    const matchCategory = category === 'all' || p.category === category;
    const matchPrice = p.price >= min && p.price <= max;
    return matchSearch && matchCategory && matchPrice;
  });

  if (sort === 'popular') {
    result.sort((a, b) => b.popular - a.popular);
  } else if (sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}

function bindFilters() {
  ['#searchInput', '#categoryFilter', '#minPrice', '#maxPrice', '#sortFilter'].forEach(sel => {
    const el = $(sel);
    if (el) el.addEventListener('input', () => renderProducts(getFilteredProducts()));
  });
}

/* ---------- RENDER RENTAL ---------- */
function renderRental() {
  const grid = $('#rentalGrid');
  if (!grid) return;

  grid.innerHTML = rentalMachines.map(m => `
    <article class="rental-card">
      <div class="rental-card-img" style="background-image: url('${m.image}')">
        <span class="rental-badge">${m.badge}</span>
      </div>
      <div class="rental-card-body">
        <h3 class="rental-card-title">${m.name}</h3>
        <div class="rental-specs">
          <div class="rental-spec"><span>Бренд</span><span>${m.brand}</span></div>
          <div class="rental-spec"><span>Мощность</span><span>${m.power}</span></div>
          <div class="rental-spec"><span>Объём</span><span>${m.volume}</span></div>
          <div class="rental-spec"><span>Аренда</span><span>${m.price}</span></div>
        </div>
        <button class="btn-rent" data-rent="${m.id}">Оставить заявку на аренду</button>
      </div>
    </article>
  `).join('');
}

/* ---------- CART ---------- */
function saveCart() {
  localStorage.setItem('baristaCart', JSON.stringify(cart));
}

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('baristaCart')) || [];
  } catch {
    cart = [];
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  $('#cartCount').textContent = count;

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  $('#cartTotal').textContent = formatPrice(total);

  const itemsEl = $('#cartItems');
  const emptyEl = $('#cartEmpty');
  const footerEl = $('#cartFooter');

  if (!cart.length) {
    itemsEl.innerHTML = '';
    emptyEl.hidden = false;
    footerEl.hidden = true;
    return;
  }

  emptyEl.hidden = true;
  footerEl.hidden = false;

  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}">
      <div class="cart-item-info">
        <div class="cart-item-title">${i.name}</div>
        <div class="cart-item-price">${formatPrice(i.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-dec="${i.id}">−</button>
          <span class="cart-item-qty">${i.qty}</span>
          <button class="qty-btn" data-inc="${i.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove="${i.id}" aria-label="Удалить">×</button>
    </div>
  `).join('');
}

function openCart() {
  $('#cartPanel').classList.add('open');
  $('#cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartPanel').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- MODALS ---------- */
function openModal(overlayId) {
  $(overlayId).hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal(overlayId) {
  $(overlayId).hidden = true;
  document.body.style.overflow = '';
}

/* ---------- FORMS ---------- */
function bindFormSubmit(formId, successId, onSuccess) {
  const form = $(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    form.hidden = true;
    const success = $(successId);
    success.hidden = false;
    if (onSuccess) onSuccess();
    setTimeout(() => {
      success.hidden = true;
      form.hidden = false;
    }, 4000);
  });
}

/* ---------- STATS ANIMATION ---------- */
function animateStats() {
  const stats = $$('.stat-number');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = value >= 1000000
            ? (value / 1000000).toFixed(1).replace('.', ',') + ' млн'
            : value.toLocaleString('ru-RU');
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  stats.forEach(el => observer.observe(el));
}

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const revealEls = document.querySelectorAll('.section-head, .product-card, .rental-card, .service-card, .step, .stat-card, .partner-card, .partner-logo');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderProducts(products);
  renderRental();
  updateCartUI();

  bindFilters();
  initReveal();
  animateStats();

  /* Header scroll */
  const header = $('#header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* Mobile nav */
  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  /* Product add (event delegation) */
  $('#productsGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add]');
    if (btn) addToCart(parseInt(btn.dataset.add, 10));
  });

  /* Rental buttons (event delegation) */
  $('#rentalGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-rent]');
    if (btn) {
      const machine = rentalMachines.find(m => m.id === parseInt(btn.dataset.rent, 10));
      if (machine) {
        currentRentalMachine = machine;
        $('#rentalMachineName').textContent = `${machine.name} — ${machine.price}`;
        openModal('#rentalOverlay');
      }
    }
  });

  /* Cart interactions */
  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#cartOverlay').addEventListener('click', closeCart);

  $('#cartItems').addEventListener('click', (e) => {
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const remove = e.target.closest('[data-remove]');
    if (inc) changeQty(parseInt(inc.dataset.inc, 10), 1);
    if (dec) changeQty(parseInt(dec.dataset.dec, 10), -1);
    if (remove) removeFromCart(parseInt(remove.dataset.remove, 10));
  });

  /* Checkout */
  $('#checkoutBtn').addEventListener('click', () => {
    closeCart();
    openModal('#checkoutOverlay');
  });
  $('#checkoutClose').addEventListener('click', () => closeModal('#checkoutOverlay'));
  $('#checkoutOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('#checkoutOverlay');
  });

  $('#checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    cart = [];
    saveCart();
    updateCartUI();
    $('#checkoutForm').hidden = true;
    $('#checkoutSuccess').hidden = false;
    setTimeout(() => {
      $('#checkoutSuccess').hidden = true;
      $('#checkoutForm').hidden = false;
      closeModal('#checkoutOverlay');
    }, 4000);
  });

  /* Rental modal */
  $('#rentalClose').addEventListener('click', () => closeModal('#rentalOverlay'));
  $('#rentalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('#rentalOverlay');
  });

  /* Forms */
  bindFormSubmit('#repairForm', '#repairSuccess');
  bindFormSubmit('#contactForm', '#contactSuccess');
  bindFormSubmit('#franchiseFormEl', '#franchiseSuccess');
  bindFormSubmit('#rentalForm', '#rentalSuccess');

  /* Swiper: Hero */
  new Swiper('.hero-swiper', {
    loop: true,
    speed: 1200,
    autoplay: { delay: 5500, disableOnInteraction: false },
    pagination: { el: '.hero-pagination', clickable: true },
    effect: 'fade',
    fadeEffect: { crossFade: true }
  });

  /* Swiper: Testimonials */
  new Swiper('.testimonials-swiper', {
    loop: true,
    speed: 800,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: '.testimonials .swiper-pagination', clickable: true },
    slidesPerView: 1,
    spaceBetween: 30
  });
});
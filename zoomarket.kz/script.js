/* =========================================================
   ZooMarket.kz — Frontend Logic
   Products, filters, cart, sliders, search, mega-menu
   ========================================================= */

/* ---------- PRODUCT DATA ---------- */
const products = [
  {
    id: 1,
    name: 'Royal Canin Medium Adult',
    category: 'food',
    brand: 'Royal Canin',
    price: 12500,
    oldPrice: 14800,
    popular: 98,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9a119ae?auto=format&fit=crop&w=600&q=80',
    desc: 'Полнорационный сухой корм для взрослых собак средних размеров.',
    weights: ['3 кг', '12 кг', '15 кг'],
    badges: ['sale'],
    age: ['adult'],
    purpose: ['weight'],
    pet: ['dog']
  },
  {
    id: 2,
    name: 'Purina Pro Plan Cat Sterilised',
    category: 'food',
    brand: 'Purina',
    price: 9800,
    popular: 95,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1601584115377-89ac2185b3d0?auto=format&fit=crop&w=600&q=80',
    desc: 'Сухой корм для стерилизованных кошек с курицей.',
    weights: ['3 кг', '10 кг'],
    badges: ['hit'],
    age: ['adult'],
    purpose: ['sterilized'],
    pet: ['cat']
  },
  {
    id: 3,
    name: "Hill's Science Diet Puppy",
    category: 'food',
    brand: "Hill's",
    price: 11200,
    popular: 90,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1568572933382-74c4b3a58d91?auto=format&fit=crop&w=600&q=80',
    desc: 'Корм для щенков средних пород с антиоксидантами.',
    weights: ['2 кг', '8 кг', '12 кг'],
    badges: ['new'],
    age: ['puppy'],
    purpose: ['all'],
    pet: ['dog']
  },
  {
    id: 4,
    name: 'Triol Deluxe для грызунов',
    category: 'food',
    brand: 'Triol',
    price: 3400,
    popular: 78,
    rating: 4.5,
    reviews: 34,
    image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=600&q=80',
    desc: 'Сбалансированная смесь для хомяков и морских свинок.',
    weights: ['500 г', '1 кг', '3 кг'],
    badges: [],
    age: ['adult'],
    purpose: ['all'],
    pet: ['rodent']
  },
  {
    id: 5,
    name: 'Поводок кожаный премиум',
    category: 'accessories',
    brand: 'Triol',
    price: 4200,
    oldPrice: 5500,
    popular: 82,
    rating: 4.6,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
    desc: 'Прочный кожаный поводок для собак длиной 120 см.',
    weights: ['S', 'M', 'L'],
    badges: ['sale'],
    age: ['adult', 'puppy', 'senior'],
    purpose: ['all'],
    pet: ['dog']
  },
  {
    id: 6,
    name: 'Лежанка для кошек плетёная',
    category: 'accessories',
    brand: 'Triol',
    price: 7800,
    popular: 76,
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=600&q=80',
    desc: 'Уютная плетёная лежанка с мягкой подушкой для кота.',
    weights: ['M', 'L'],
    badges: ['hit'],
    age: ['adult', 'senior'],
    purpose: ['all'],
    pet: ['cat']
  },
  {
    id: 7,
    name: 'Аквариум 60 литров',
    category: 'accessories',
    brand: 'Triol',
    price: 24500,
    popular: 88,
    rating: 4.8,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80',
    desc: 'Стеклянный аквариум 60 л с LED-подсветкой и фильтром.',
    weights: ['60 л', '100 л'],
    badges: ['hit'],
    age: [],
    purpose: ['all'],
    pet: ['fish', 'aquarium']
  },
  {
    id: 8,
    name: 'Kong Classic игрушка',
    category: 'toys',
    brand: 'Kong',
    price: 3900,
    popular: 92,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    desc: 'Неразрушимая игрушка из натурального каучука для собак.',
    weights: ['S', 'M', 'L', 'XL'],
    badges: ['hit'],
    age: ['adult', 'puppy', 'senior'],
    purpose: ['all'],
    pet: ['dog']
  },
  {
    id: 9,
    name: 'Мяч для собак с пищалкой',
    category: 'toys',
    brand: 'Triol',
    price: 1800,
    oldPrice: 2400,
    popular: 70,
    rating: 4.4,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=600&q=80',
    desc: 'Яркий резиновый мяч со звуком для активных игр.',
    weights: ['S', 'M', 'L'],
    badges: ['sale'],
    age: ['adult', 'puppy'],
    purpose: ['all'],
    pet: ['dog']
  },
  {
    id: 10,
    name: 'Дразнилка-удочка для кошек',
    category: 'toys',
    brand: 'Triol',
    price: 1500,
    popular: 65,
    rating: 4.5,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1514888286974-6c7e75ca8d96?auto=format&fit=crop&w=600&q=80',
    desc: 'Интерактивная удочка с перьями для развития инстинктов.',
    weights: ['1 шт'],
    badges: [],
    age: ['adult', 'puppy', 'senior'],
    purpose: ['all'],
    pet: ['cat']
  },
  {
    id: 11,
    name: 'Bayer Advocate от блох',
    category: 'medicine',
    brand: 'Bayer',
    price: 6500,
    popular: 94,
    rating: 4.8,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80',
    desc: 'Капли на холку для собак от блох, клещей и гельминтов.',
    weights: ['3 пипетки', '6 пипеток'],
    badges: ['hit'],
    age: ['adult', 'puppy', 'senior'],
    purpose: ['all'],
    pet: ['dog', 'cat']
  },
  {
    id: 12,
    name: 'Bayer Drontal для кошек',
    category: 'medicine',
    brand: 'Bayer',
    price: 4200,
    popular: 86,
    rating: 4.7,
    reviews: 54,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    desc: 'Антигельминтный препарат широкого спектра для кошек.',
    weights: ['2 таб', '8 таб'],
    badges: [],
    age: ['adult', 'senior'],
    purpose: ['all'],
    pet: ['cat']
  },
  {
    id: 13,
    name: 'Витамины для шерсти кошек',
    category: 'medicine',
    brand: 'Triol',
    price: 2800,
    popular: 72,
    rating: 4.5,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80',
    desc: 'Комплекс витаминов и Омега-3 для блестящей шерсти.',
    weights: ['60 таб', '120 таб'],
    badges: ['new'],
    age: ['adult', 'senior'],
    purpose: ['hypo'],
    pet: ['cat']
  },
  {
    id: 14,
    name: 'Royal Canin Satiety',
    category: 'food',
    brand: 'Royal Canin',
    price: 15800,
    oldPrice: 18200,
    popular: 80,
    rating: 4.6,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9a119ae?auto=format&fit=crop&w=600&q=80',
    desc: 'Диетический корм для собак с избыточным весом.',
    weights: ['6 кг', '12 кг'],
    badges: ['sale'],
    age: ['adult', 'senior'],
    purpose: ['weight'],
    pet: ['dog']
  },
  {
    id: 15,
    name: 'Ошейник нейлоновый регулируемый',
    category: 'accessories',
    brand: 'Triol',
    price: 2200,
    popular: 60,
    rating: 4.3,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80',
    desc: 'Прочный нейлоновый ошейник с идентификационной биркой.',
    weights: ['S', 'M', 'L'],
    badges: [],
    age: ['adult', 'puppy'],
    purpose: ['all'],
    pet: ['dog', 'cat']
  },
  {
    id: 16,
    name: 'Когтеточка напольная',
    category: 'accessories',
    brand: 'Triol',
    price: 9500,
    popular: 84,
    rating: 4.7,
    reviews: 47,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
    desc: 'Напольная когтеточка из джута с игрушкой-машалкой.',
    weights: ['60 см', '80 см'],
    badges: ['hit'],
    age: ['adult', 'puppy', 'senior'],
    purpose: ['all'],
    pet: ['cat']
  }
];

/* ---------- BRANDS DATA ---------- */
const brands = [
  'Royal Canin', 'Purina Pro Plan', "Hill's", 'Bayer', 'Kong',
  'Triol', 'Whiskas', 'Pedigree', 'Felix', 'Acana'
];

/* ---------- STATE ---------- */
let cart = [];
let favorites = [];
let currentQuickBuy = null;
let currentView = 'grid';

/* ---------- HELPERS ---------- */
const formatPrice = (num) => num.toLocaleString('ru-RU') + ' ₸';
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const badgeLabels = {
  hit: 'Хит',
  sale: 'Акция',
  new: 'Новинка'
};

/* ---------- RENDER PRODUCT CARD ---------- */
function productCardHTML(p) {
  const badgesHTML = (p.badges || []).map(b =>
    `<span class="product-badge product-badge--${b}">${badgeLabels[b] || b}</span>`
  ).join('');

  const weightsHTML = (p.weights || []).map((w, i) =>
    `<button class="weight-chip ${i === 0 ? 'active' : ''}" data-weight="${w}">${w}</button>`
  ).join('');

  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        <div class="product-badges">${badgesHTML}</div>
        <button class="product-fav" data-fav="${p.id}" aria-label="В избранное">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span>${p.rating} · ${p.reviews} отз.</span>
        </div>
        <div class="product-weights">${weightsHTML}</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-cart" data-add="${p.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12L5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>
            В корзину
          </button>
          <button class="btn-quick" data-quick="${p.id}">1 клик</button>
        </div>
      </div>
    </article>
  `;
}

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts(list) {
  const grid = $('#productsGrid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '';
    $('#emptyState').hidden = false;
    $('#resultsCount').textContent = '0 товаров';
    return;
  }

  $('#emptyState').hidden = true;
  $('#resultsCount').textContent = `${list.length} товаров`;

  grid.innerHTML = list.map(productCardHTML).join('');
  grid.className = 'products-grid' + (currentView === 'list' ? ' list-view' : '');
  updateFavUI();
}

/* ---------- RENDER BESTSELLERS ---------- */
function renderBestsellers() {
  const wrap = $('#bestsellersGrid');
  if (!wrap) return;

  const bestsellers = products
    .filter(p => (p.badges || []).includes('hit'))
    .slice(0, 8);

  wrap.innerHTML = bestsellers.map(p =>
    `<div class="swiper-slide">${productCardHTML(p)}</div>`
  ).join('');
}

/* ---------- RENDER BRANDS ---------- */
function renderBrands() {
  const wrap = $('#brandsGrid');
  if (!wrap) return;

  wrap.innerHTML = brands.map(b =>
    `<div class="swiper-slide"><div class="brand-card"><span class="brand-name">${b}</span></div></div>`
  ).join('');
}

/* ---------- FILTERING ---------- */
function getFilteredProducts() {
  const min = parseFloat($('#minPrice').value) || 0;
  const max = parseFloat($('#maxPrice').value) || Infinity;
  const category = document.querySelector('input[name="category"]:checked')?.value || 'all';
  const brandsChecked = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(i => i.value);
  const agesChecked = Array.from(document.querySelectorAll('input[name="age"]:checked')).map(i => i.value);
  const purposesChecked = Array.from(document.querySelectorAll('input[name="purpose"]:checked')).map(i => i.value);
  const stockChecked = Array.from(document.querySelectorAll('input[name="stock"]:checked')).map(i => i.value);
  const sort = $('#sortFilter').value;

  let result = products.filter(p => {
    const matchPrice = p.price >= min && p.price <= max;
    const matchCategory = category === 'all' || p.category === category;
    const matchBrand = !brandsChecked.length || brandsChecked.includes(p.brand);
    const matchAge = !agesChecked.length || (p.age || []).some(a => agesChecked.includes(a));
    const matchPurpose = !purposesChecked.length || (p.purpose || []).some(pr => purposesChecked.includes(pr));
    const matchStock = !stockChecked.length ||
      (stockChecked.includes('sale') && (p.badges || []).includes('sale')) ||
      (stockChecked.includes('in') && true);
    return matchPrice && matchCategory && matchBrand && matchAge && matchPurpose && matchStock;
  });

  if (sort === 'popular') {
    result.sort((a, b) => b.popular - a.popular);
  } else if (sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === 'sale') {
    result.sort((a, b) => (b.oldPrice ? 1 : 0) - (a.oldPrice ? 1 : 0));
  }

  return result;
}

function applyFilters() {
  renderProducts(getFilteredProducts());
}

function bindFilters() {
  ['#minPrice', '#maxPrice', '#sortFilter'].forEach(sel => {
    const el = $(sel);
    if (el) el.addEventListener('input', applyFilters);
  });

  document.querySelectorAll('input[name="category"], input[name="brand"], input[name="age"], input[name="purpose"], input[name="stock"]').forEach(el => {
    el.addEventListener('change', applyFilters);
  });

  const resetBtn = $('#resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      $('#minPrice').value = '';
      $('#maxPrice').value = '';
      const allCat = document.querySelector('input[name="category"][value="all"]');
      if (allCat) allCat.checked = true;
      document.querySelectorAll('input[name="brand"], input[name="age"], input[name="purpose"], input[name="stock"]').forEach(i => i.checked = false);
      $('#sortFilter').value = 'popular';
      applyFilters();
    });
  }
}

/* ---------- VIEW TOGGLE ---------- */
function bindViewToggle() {
  $$('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      const grid = $('#productsGrid');
      if (grid) grid.className = 'products-grid' + (currentView === 'list' ? ' list-view' : '');
    });
  });
}

/* ---------- CART ---------- */
function saveCart() {
  localStorage.setItem('zoomarketCart', JSON.stringify(cart));
}

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('zoomarketCart')) || [];
  } catch {
    cart = [];
  }
}

function addToCart(id, weight) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const w = weight || product.weights?.[0] || '';
  const key = `${id}-${w}`;
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1, weight: w, key });
  }

  saveCart();
  updateCartUI();
  animateCartButton(id);
}

function animateCartButton(id) {
  const btn = document.querySelector(`[data-add="${id}"]`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '✓ Добавлено';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12L5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg> В корзину';
    }, 1500);
  }
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.key !== key);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  $('#cartCount').textContent = count;
  $('#cartItemsCount').textContent = `(${count})`;

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  $('#cartTotal').textContent = formatPrice(total);

  const itemsEl = $('#cartItems');
  const emptyEl = $('#cartEmpty');
  const footerEl = $('#cartFooter');

  if (!cart.length) {
    itemsEl.innerHTML = '';
    emptyEl.style.display = 'flex';
    footerEl.hidden = true;
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.hidden = false;

  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}">
      <div class="cart-item-info">
        <div class="cart-item-title">${i.name}</div>
        <div class="cart-item-price">${formatPrice(i.price)} ${i.weight ? '· ' + i.weight : ''}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-dec="${i.key}">−</button>
          <span class="cart-item-qty">${i.qty}</span>
          <button class="qty-btn" data-inc="${i.key}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove="${i.key}" aria-label="Удалить">×</button>
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

/* ---------- FAVORITES ---------- */
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('zoomarketFav', JSON.stringify(favorites));
  updateFavUI();
}

function loadFavorites() {
  try {
    favorites = JSON.parse(localStorage.getItem('zoomarketFav')) || [];
  } catch {
    favorites = [];
  }
}

function updateFavUI() {
  $('#favCount').textContent = favorites.length;
  document.querySelectorAll('.product-fav').forEach(btn => {
    const id = parseInt(btn.dataset.fav, 10);
    btn.classList.toggle('active', favorites.includes(id));
  });
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

/* ---------- SEARCH ---------- */
function initSearch() {
  const input = $('#globalSearch');
  const suggestions = $('#searchSuggestions');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      suggestions.hidden = true;
      return;
    }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!matches.length) {
      suggestions.hidden = true;
      return;
    }

    suggestions.innerHTML = matches.map(p => `
      <li data-search-id="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <span class="ss-name">${p.name}</span>
        <span class="ss-price">${formatPrice(p.price)}</span>
      </li>
    `).join('');
    suggestions.hidden = false;
  });

  suggestions.addEventListener('click', (e) => {
    const li = e.target.closest('[data-search-id]');
    if (li) {
      const id = parseInt(li.dataset.searchId, 10);
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(id);
        input.value = '';
        suggestions.hidden = true;
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) {
      suggestions.hidden = true;
    }
  });
}

/* ---------- MEGA MENU ---------- */
function initMegaMenu() {
  const btn = $('#catalogBtn');
  const menu = $('#megaMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    btn.classList.toggle('active', !menu.hidden);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#megaMenu') && !e.target.closest('#catalogBtn')) {
      menu.hidden = true;
      btn.classList.remove('active');
    }
  });

  menu.querySelectorAll('a[data-cat]').forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.dataset.cat;
      const radio = document.querySelector(`input[name="category"][value="${cat}"]`);
      if (radio) {
        radio.checked = true;
        applyFilters();
      }
      menu.hidden = true;
      btn.classList.remove('active');
    });
  });
}

/* ---------- CITY SELECT ---------- */
function initCitySelect() {
  const select = $('#citySelect');
  if (!select) return;

  select.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('open');
  });

  const dropdown = $('#cityDropdown');
  if (dropdown) {
    dropdown.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if (li) {
        $('#currentCity').textContent = li.dataset.city;
        select.classList.remove('open');
      }
    });
  }

  document.addEventListener('click', () => select.classList.remove('open'));
}

/* ---------- LANGUAGE SWITCH ---------- */
function initLangSwitch() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ---------- FEED SELECTOR ---------- */
function initFeedSelector() {
  ['feedAnimal', 'feedAge', 'feedNeeds'].forEach(id => {
    const wrap = $('#' + id);
    if (!wrap) return;
    wrap.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        wrap.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });

  const searchBtn = $('#feedSearch');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const animal = $('#feedAnimal .chip.active')?.dataset.val || 'dog';
      const age = $('#feedAge .chip.active')?.dataset.val || 'adult';
      const needs = $('#feedNeeds .chip.active')?.dataset.val || 'all';

      const matches = products.filter(p =>
        p.category === 'food' &&
        (p.pet || []).includes(animal) &&
        (p.age || []).includes(age) &&
        ((needs === 'all') || (p.purpose || []).includes(needs))
      );

      renderProducts(matches.length ? matches : products.filter(p => p.category === 'food'));
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* ---------- PET CATEGORIES ---------- */
function initPetCats() {
  $$('.pet-cat').forEach(cat => {
    cat.addEventListener('click', (e) => {
      const pet = cat.dataset.pet;
      const matches = products.filter(p => (p.pet || []).includes(pet));
      if (matches.length) {
        renderProducts(matches);
      }
    });
  });
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

/* ---------- SWIPER INIT ---------- */
function initSwipers() {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.hero-swiper', {
    loop: true,
    speed: 700,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.hero-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next.hero-arrow',
      prevEl: '.swiper-button-prev.hero-arrow'
    }
  });

  new Swiper('.products-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next.product-arrow',
      prevEl: '.swiper-button-prev.product-arrow'
    },
    breakpoints: {
      480: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
      1280: { slidesPerView: 5, spaceBetween: 20 }
    }
  });

  new Swiper('.brands-swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      480: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 7 },
      1280: { slidesPerView: 8 }
    }
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadFavorites();

  renderProducts(products);
  renderBestsellers();
  renderBrands();
  updateCartUI();
  updateFavUI();

  bindFilters();
  bindViewToggle();
  initSearch();
  initMegaMenu();
  initCitySelect();
  initLangSwitch();
  initFeedSelector();
  initPetCats();
  initSwipers();

  /* Cart interactions */
  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#cartOverlay').addEventListener('click', closeCart);

  /* Event delegation: products grid */
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add]');
    const quickBtn = e.target.closest('[data-quick]');
    const favBtn = e.target.closest('[data-fav]');
    const weightChip = e.target.closest('.weight-chip');

    if (addBtn) {
      const card = addBtn.closest('.product-card');
      const activeWeight = card?.querySelector('.weight-chip.active')?.dataset.weight;
      addToCart(parseInt(addBtn.dataset.add, 10), activeWeight);
    }

    if (quickBtn) {
      const id = parseInt(quickBtn.dataset.quick, 10);
      const product = products.find(p => p.id === id);
      if (product) {
        currentQuickBuy = product;
        $('#quickBuyName').textContent = `${product.name} — ${formatPrice(product.price)}`;
        openModal('#quickBuyOverlay');
      }
    }

    if (favBtn) {
      toggleFavorite(parseInt(favBtn.dataset.fav, 10));
    }

    if (weightChip) {
      const card = weightChip.closest('.product-card');
      if (card) {
        card.querySelectorAll('.weight-chip').forEach(c => c.classList.remove('active'));
        weightChip.classList.add('active');
      }
    }
  });

  /* Cart items controls */
  $('#cartItems').addEventListener('click', (e) => {
    const inc = e.target.closest('[data-inc]');
    const dec = e.target.closest('[data-dec]');
    const remove = e.target.closest('[data-remove]');
    if (inc) changeQty(inc.dataset.inc, 1);
    if (dec) changeQty(dec.dataset.dec, -1);
    if (remove) removeFromCart(remove.dataset.remove);
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

  /* Quick buy */
  $('#quickBuyClose').addEventListener('click', () => closeModal('#quickBuyOverlay'));
  $('#quickBuyOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('#quickBuyOverlay');
  });

  /* Forms */
  bindFormSubmit('#quickBuyForm', '#quickBuySuccess', () => {
    setTimeout(() => closeModal('#quickBuyOverlay'), 2000);
  });
  bindFormSubmit('#contactForm', '#contactSuccess');
  bindFormSubmit('#subscribeForm', '#subscribeSuccess');

  /* Promo */
  const promoBtn = $('#promoBtn');
  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      const input = $('#promoInput');
      if (input.value.trim()) {
        promoBtn.textContent = '✓ Применён';
        promoBtn.style.background = 'var(--green-600)';
        promoBtn.style.color = '#fff';
        promoBtn.style.borderColor = 'var(--green-600)';
        input.value = '';
        setTimeout(() => {
          promoBtn.textContent = 'Применить';
          promoBtn.style.background = '';
          promoBtn.style.color = '';
          promoBtn.style.borderColor = '';
        }, 3000);
      }
    });
  }

  /* ESC to close */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal('#checkoutOverlay');
      closeModal('#quickBuyOverlay');
      const menu = $('#megaMenu');
      if (menu) menu.hidden = true;
    }
  });
});
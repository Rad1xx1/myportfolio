const storageKeys = {
  listings: 'autoflux-listings',
  profile: 'autoflux-profile'
};

const defaultListings = [
  {
    id: 1,
    title: 'Toyota Camry 2023',
    city: 'Алматы',
    price: 9800000,
    category: 'all',
    owner: 'Алексей',
    phone: '+7 700 111 22 33',
    is_mine: true,
    is_top: false,
    is_vip: false
  },
  {
    id: 2,
    title: 'BMW X5 2021',
    city: 'Астана',
    price: 22000000,
    category: 'all',
    owner: 'Данияр',
    phone: '@daniyar',
    is_mine: false,
    is_top: true,
    is_vip: false
  },
  {
    id: 3,
    title: 'Honda Civic 2020',
    city: 'Шымкент',
    price: 7600000,
    category: 'all',
    owner: 'Нурлан',
    phone: '+7 701 444 55 66',
    is_mine: false,
    is_top: false,
    is_vip: false
  },
  {
    id: 4,
    title: 'Yamaha PW50',
    city: 'Караганда',
    price: 1800000,
    category: 'pitbike',
    owner: 'Марат',
    phone: '+7 702 999 88 77',
    is_mine: false,
    is_top: false,
    is_vip: false
  },
  {
    id: 5,
    title: 'Tesla Model 3 2022',
    city: 'Алматы',
    price: 15000000,
    category: 'electric',
    owner: 'Сергей',
    phone: '@sergey',
    is_mine: false,
    is_top: false,
    is_vip: true
  }
];

let listings = JSON.parse(localStorage.getItem(storageKeys.listings) || 'null') || defaultListings;
let profile = JSON.parse(localStorage.getItem(storageKeys.profile) || 'null') || {
  name: 'Алексей',
  contact: '+7 700 000 00 00',
  city: 'Алматы'
};
let activeListingId = null;
let chatMessages = [];

const elements = {
  toggle: document.querySelector('.mobile-toggle'),
  topbar: document.querySelector('.topbar'),
  listingsGrid: document.getElementById('listingsGrid'),
  searchInput: document.getElementById('searchInput'),
  cityFilter: document.getElementById('cityFilter'),
  priceFilter: document.getElementById('priceFilter'),
  categoryFilter: document.getElementById('categoryFilter'),
  sortSelect: document.getElementById('sortSelect'),
  clearFilters: document.getElementById('clearFilters'),
  resultsCount: document.getElementById('resultsCount'),
  profileOpen: document.getElementById('profileOpen'),
  addListingOpen: document.getElementById('addListingOpen'),
  sellerCta: document.getElementById('sellerCta'),
  overlay: document.getElementById('overlay'),
  promoModal: document.getElementById('promoModal'),
  profileModal: document.getElementById('profileModal'),
  contactModal: document.getElementById('contactModal'),
  listingModal: document.getElementById('listingModal'),
  promoTitle: document.getElementById('promoTitle'),
  profileForm: document.getElementById('profileForm'),
  profileName: document.getElementById('profileName'),
  profileContact: document.getElementById('profileContact'),
  profileCity: document.getElementById('profileCity'),
  myListingsList: document.getElementById('myListingsList'),
  contactOwner: document.getElementById('contactOwner'),
  chatThread: document.getElementById('chatThread'),
  contactMessage: document.getElementById('contactMessage'),
  sendContact: document.getElementById('sendContact'),
  listingForm: document.getElementById('listingForm'),
  listingTitle: document.getElementById('listingTitle'),
  listingCity: document.getElementById('listingCity'),
  listingPrice: document.getElementById('listingPrice'),
  listingCategory: document.getElementById('listingCategory')
};

function saveState() {
  localStorage.setItem(storageKeys.listings, JSON.stringify(listings));
  localStorage.setItem(storageKeys.profile, JSON.stringify(profile));
}

function getCategoryLabel(category) {
  if (category === 'pitbike') return 'Питбайк / мопед';
  if (category === 'electric') return 'Электро';
  return 'Авто';
}

function getMediaClass(category) {
  if (category === 'pitbike') return 'orange';
  if (category === 'electric') return 'green';
  return ['blue', 'deep', 'cyan', 'violet'][Math.floor(Math.random() * 4)];
}

function getFilteredListings() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const city = elements.cityFilter.value;
  const price = Number(elements.priceFilter.value || 0);
  const category = elements.categoryFilter.value;
  const sort = elements.sortSelect.value;

  const filtered = listings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search) || item.city.toLowerCase().includes(search);
    const matchesCity = !city || item.city === city;
    const matchesPrice = !price || item.price <= price;
    let matchesCategory = true;

    if (category === 'budget') matchesCategory = item.price <= 2000000;
    if (category === 'pitbike') matchesCategory = item.category === 'pitbike';
    if (category === 'electric') matchesCategory = item.category === 'electric';

    return matchesSearch && matchesCity && matchesPrice && matchesCategory;
  });

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

  return filtered;
}

function setActiveChip(chip) {
  document.querySelectorAll('.chip').forEach((button) => {
    button.classList.toggle('active', button.dataset.chip === chip);
  });
}

function renderListings() {
  const filtered = getFilteredListings();
  elements.resultsCount.textContent = `${filtered.length} объявлений`;

  if (!filtered.length) {
    elements.listingsGrid.innerHTML = '<div class="empty-state">Ничего не найдено</div>';
    return;
  }

  elements.listingsGrid.innerHTML = filtered.map((item) => `
    <article class="listing-card ${item.is_vip ? 'vip-card' : ''} ${item.is_top ? 'top-card' : ''}" data-id="${item.id}">
      <div class="card-media ${getMediaClass(item.category)}">${item.is_vip ? 'VIP-поднятое' : item.is_top ? 'ТОП-объявление' : 'Новая подборка'}</div>
      <div class="card-topline">
        <span class="status-chip ${item.is_vip ? 'vip' : ''}">${item.is_vip ? 'VIP' : item.is_top ? 'ТОП' : 'Новое'}</span>
        ${item.is_mine ? '<span class="status-chip mine">Мое</span>' : ''}
      </div>
      <h3>${item.title}</h3>
      <p>${item.city} • ${getCategoryLabel(item.category)}</p>
      <div class="meta-row">
        <span class="meta-pill">${item.city}</span>
        <span class="meta-pill">${item.is_mine ? 'Продавец' : 'Проверено'}</span>
      </div>
      <div class="price-row">
        <strong>${item.price.toLocaleString('ru-RU')} ₸</strong>
        <span>${item.owner}</span>
      </div>
      <div class="card-actions">
        <button class="ghost-btn" data-action="contact" data-id="${item.id}">Написать</button>
        ${item.is_mine ? `<button class="ghost-btn" data-action="promote" data-id="${item.id}">Продвинуть</button>` : ''}
      </div>
    </article>
  `).join('');
}

function renderMyListings() {
  const mine = listings.filter((item) => item.is_mine);
  if (!mine.length) {
    elements.myListingsList.innerHTML = '<div class="empty-state">Список пуст</div>';
    return;
  }

  elements.myListingsList.innerHTML = mine.map((item) => `
    <div class="my-list-item">
      <div>
        <strong>${item.title}</strong><br />
        <small>${item.city} • ${item.price.toLocaleString('ru-RU')} ₸</small>
      </div>
      <div>
        <button class="ghost-btn" data-action="promote" data-id="${item.id}">Продвинуть</button>
        <button class="ghost-btn" data-action="delete" data-id="${item.id}">Удалить</button>
      </div>
    </div>
  `).join('');
}

function openModal(modal) {
  elements.overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  elements.overlay.classList.add('hidden');
  document.querySelectorAll('.modal').forEach((modal) => modal.classList.add('hidden'));
}

function openPromo(id) {
  activeListingId = id;
  const item = listings.find((entry) => entry.id === id);
  if (!item) return;
  elements.promoTitle.textContent = item.title;
  openModal(elements.promoModal);
}

function renderChat() {
  elements.chatThread.innerHTML = chatMessages.map((message) => `
    <div class="chat-bubble ${message.from}">${message.text}</div>
  `).join('');
}

function openContact(id) {
  const item = listings.find((entry) => entry.id === id);
  if (!item) return;
  elements.contactOwner.textContent = `${item.owner} • ${item.phone}`;
  chatMessages = [
    { from: 'seller', text: 'Здравствуйте! Машина ещё доступна. Могу показать сегодня после 18:00.' }
  ];
  renderChat();
  elements.contactMessage.value = '';
  openModal(elements.contactModal);
}

function applyPromo(type) {
  const item = listings.find((entry) => entry.id === activeListingId);
  if (!item) return;
  if (type === 'top') item.is_top = true;
  if (type === 'vip') {
    item.is_vip = true;
    item.is_top = true;
  }
  saveState();
  renderListings();
  closeModal();
}

function deleteListing(id) {
  listings = listings.filter((item) => item.id !== id);
  saveState();
  renderListings();
  renderMyListings();
}

function attachEvents() {
  elements.toggle?.addEventListener('click', () => elements.topbar.classList.toggle('nav-open'));
  elements.profileOpen?.addEventListener('click', () => {
    elements.profileName.value = profile.name;
    elements.profileContact.value = profile.contact;
    elements.profileCity.value = profile.city;
    openModal(elements.profileModal);
  });

  elements.addListingOpen?.addEventListener('click', () => openModal(elements.listingModal));
  elements.sellerCta?.addEventListener('click', () => openModal(elements.listingModal));

  elements.overlay?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  elements.clearFilters?.addEventListener('click', () => {
    elements.searchInput.value = '';
    elements.cityFilter.value = '';
    elements.priceFilter.value = '';
    elements.categoryFilter.value = 'all';
    elements.sortSelect.value = 'default';
    setActiveChip('all');
    renderListings();
  });

  [elements.searchInput, elements.cityFilter, elements.priceFilter, elements.categoryFilter, elements.sortSelect].forEach((input) => {
    input?.addEventListener('input', renderListings);
    input?.addEventListener('change', renderListings);
  });

  document.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      const chip = button.dataset.chip || 'all';
      elements.categoryFilter.value = chip;
      setActiveChip(chip);
      renderListings();
    });
  });

  elements.categoryFilter?.addEventListener('change', () => {
    setActiveChip(elements.categoryFilter.value);
    renderListings();
  });

  document.querySelectorAll('.modal-tabs .tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.modal-tabs .tab-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const tab = button.dataset.tab;
      document.getElementById('profileTab').classList.toggle('hidden', tab !== 'profile');
      document.getElementById('myListingsTab').classList.toggle('hidden', tab !== 'my-listings');
    });
  });

  document.querySelectorAll('.promo-option').forEach((button) => {
    button.addEventListener('click', () => applyPromo(button.dataset.promoType));
  });

  elements.profileForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    profile = {
      name: elements.profileName.value,
      contact: elements.profileContact.value,
      city: elements.profileCity.value
    };
    saveState();
    renderListings();
    closeModal();
  });

  elements.sendContact?.addEventListener('click', () => {
    const text = elements.contactMessage.value.trim();
    if (!text) return;
    chatMessages.push({ from: 'user', text });
    renderChat();
    elements.contactMessage.value = '';
    setTimeout(() => {
      chatMessages.push({ from: 'seller', text: 'Спасибо, я отвечу в ближайшее время.' });
      renderChat();
    }, 500);
  });

  elements.listingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    listings.unshift({
      id: Date.now(),
      title: elements.listingTitle.value,
      city: elements.listingCity.value || profile.city,
      price: Number(elements.listingPrice.value),
      category: elements.listingCategory.value,
      owner: profile.name,
      phone: profile.contact,
      is_mine: true,
      is_top: false,
      is_vip: false
    });
    saveState();
    elements.listingForm.reset();
    renderListings();
    renderMyListings();
    closeModal();
  });

  elements.listingsGrid?.addEventListener('click', (event) => {
    const card = event.target.closest('.listing-card');
    const button = event.target.closest('button');
    if (!card && !button) return;

    const id = Number(card?.dataset.id || button?.dataset.id);
    if (!id) return;

    if (button?.dataset.action === 'contact') {
      openContact(id);
    } else if (button?.dataset.action === 'promote') {
      openPromo(id);
    } else if (card) {
      const item = listings.find((entry) => entry.id === id);
      if (item?.is_mine) openPromo(id);
    }
  });

  elements.myListingsList?.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const id = Number(button.dataset.id);
    if (button.dataset.action === 'promote') openPromo(id);
    if (button.dataset.action === 'delete') deleteListing(id);
  });
}

const year = new Date().getFullYear();
const footer = document.querySelector('.footer p');
if (footer) {
  footer.textContent = `Автомобильный маркетплейс нового поколения • ${year}`;
}

setActiveChip('all');
renderListings();
renderMyListings();
attachEvents();

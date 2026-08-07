const storageKeys = {
  listings: 'autoflux-listings',
  profile: 'autoflux-profile',
  chats: 'autoflux-chats'
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
let chats = JSON.parse(localStorage.getItem(storageKeys.chats) || 'null') || {};
let activeListingId = null;
let activeChatRole = 'buyer';

const elements = {
  toggle: document.querySelector('.mobile-toggle'),
  topbar: document.querySelector('.topbar'),
  listingsGrid: document.getElementById('listingsGrid'),
  searchInput: document.getElementById('searchInput'),
  cityFilter: document.getElementById('cityFilter'),
  priceFilter: document.getElementById('priceFilter'),
  categoryFilter: document.getElementById('categoryFilter'),
  clearFilters: document.getElementById('clearFilters'),
  profileOpen: document.getElementById('profileOpen'),
  addListingOpen: document.getElementById('addListingOpen'),
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
  contactTitle: document.getElementById('contactTitle'),
  chatThread: document.getElementById('chatThread'),
  contactMessage: document.getElementById('contactMessage'),
  sendContact: document.getElementById('sendContact'),
  chatsOpen: document.getElementById('chatsOpen'),
  chatsModal: document.getElementById('chatsModal'),
  chatsList: document.getElementById('chatsList'),
  listingForm: document.getElementById('listingForm'),
  listingTitle: document.getElementById('listingTitle'),
  listingCity: document.getElementById('listingCity'),
  listingPrice: document.getElementById('listingPrice'),
  listingCategory: document.getElementById('listingCategory')
};

function saveState() {
  localStorage.setItem(storageKeys.listings, JSON.stringify(listings));
  localStorage.setItem(storageKeys.profile, JSON.stringify(profile));
  localStorage.setItem(storageKeys.chats, JSON.stringify(chats));
}

function renderListings() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const city = elements.cityFilter.value;
  const price = Number(elements.priceFilter.value || 0);
  const category = elements.categoryFilter.value;

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

  if (!filtered.length) {
    elements.listingsGrid.innerHTML = '<div class="empty-state">Ничего не найдено</div>';
    return;
  }

  elements.listingsGrid.innerHTML = filtered.map((item) => `
    <article class="listing-card ${item.is_vip ? 'vip-card' : ''}" data-id="${item.id}">
      <div class="card-topline">
        <span class="status-chip ${item.is_vip ? 'vip' : ''}">${item.is_vip ? 'VIP' : item.is_top ? 'ТОП' : 'Новое'}</span>
        ${item.is_mine ? '<span class="status-chip mine">Мое</span>' : ''}
      </div>
      <h3>${item.title}</h3>
      <p>${item.city} • ${item.category === 'pitbike' ? 'Питбайк/мопед' : item.category === 'electric' ? 'Электро' : 'Авто'}</p>
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
        <button class="ghost-btn" data-action="chat" data-id="${item.id}">Сообщения</button>
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

function openContact(id, role = 'buyer') {
  const item = listings.find((entry) => entry.id === id);
  if (!item) return;
  activeListingId = id;
  activeChatRole = role;
  elements.contactTitle.textContent = role === 'seller' ? 'Чат с покупателем' : 'Чат с продавцом';
  elements.contactOwner.textContent = role === 'seller' ? item.title : `${item.owner} • ${item.phone}`;
  elements.contactMessage.value = '';
  renderChatThread(id);
  openModal(elements.contactModal);
}

function renderChatThread(id) {
  const messages = chats[id] || [];
  if (!messages.length) {
    elements.chatThread.innerHTML = '<div class="empty-state">Сообщений пока нет</div>';
    return;
  }
  elements.chatThread.innerHTML = messages.map((message) => `
    <div class="chat-bubble ${message.from === activeChatRole ? 'me' : 'them'}">
      <p>${message.text}</p>
      <span>${message.time}</span>
    </div>
  `).join('');
  elements.chatThread.scrollTop = elements.chatThread.scrollHeight;
}

function sendChatMessage() {
  const text = elements.contactMessage.value.trim();
  if (!text || !activeListingId) return;
  const time = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  chats[activeListingId] = chats[activeListingId] || [];
  chats[activeListingId].push({ from: activeChatRole, text, time });
  elements.contactMessage.value = '';
  saveState();
  renderChatThread(activeListingId);

  const otherRole = activeChatRole === 'buyer' ? 'seller' : 'buyer';
  if (activeChatRole === 'buyer') {
    setTimeout(() => {
      chats[activeListingId].push({
        from: otherRole,
        text: 'Спасибо за сообщение! Отвечу в ближайшее время.',
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      });
      saveState();
      if (!elements.contactModal.classList.contains('hidden') && activeChatRole === 'buyer') {
        renderChatThread(activeListingId);
      }
    }, 900);
  }
}

function renderChatsList() {
  const mine = listings.filter((item) => item.is_mine && chats[item.id]?.length);
  if (!mine.length) {
    elements.chatsList.innerHTML = '<div class="empty-state">Сообщений пока нет</div>';
    return;
  }
  elements.chatsList.innerHTML = mine.map((item) => {
    const last = chats[item.id][chats[item.id].length - 1];
    return `
      <div class="my-list-item" data-id="${item.id}" data-action="open-chat">
        <div>
          <strong>${item.title}</strong><br />
          <small>${last.text}</small>
        </div>
        <button class="ghost-btn" data-action="open-chat" data-id="${item.id}">Открыть</button>
      </div>
    `;
  }).join('');
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

  document.getElementById('addListingOpen')?.addEventListener('click', () => openModal(elements.listingModal));
  document.querySelector('#catalog .btn-secondary')?.addEventListener('click', () => openModal(elements.listingModal));

  elements.overlay?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  elements.clearFilters?.addEventListener('click', () => {
    elements.searchInput.value = '';
    elements.cityFilter.value = '';
    elements.priceFilter.value = '';
    elements.categoryFilter.value = 'all';
    renderListings();
  });

  [elements.searchInput, elements.cityFilter, elements.priceFilter, elements.categoryFilter].forEach((input) => {
    input?.addEventListener('input', renderListings);
    input?.addEventListener('change', renderListings);
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
    if (button.dataset.action === 'chat') openContact(id, 'seller');
  });

  elements.chatsOpen?.addEventListener('click', () => {
    renderChatsList();
    openModal(elements.chatsModal);
  });

  elements.chatsList?.addEventListener('click', (event) => {
    const el = event.target.closest('[data-id]');
    if (!el) return;
    openContact(Number(el.dataset.id), 'seller');
  });

  elements.sendContact?.addEventListener('click', sendChatMessage);
  elements.contactMessage?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendChatMessage();
    }
  });
}

const year = new Date().getFullYear();
const footer = document.querySelector('.footer p');
if (footer) {
  footer.textContent = `Автомобильный маркетплейс нового поколения • ${year}`;
}

renderListings();
renderMyListings();
attachEvents();

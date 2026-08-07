const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
const heroDotsContainer = document.querySelector('.slider-dots');
const heroButtons = document.querySelectorAll('.slider-button[data-direction]');

if (heroSlides.length && heroDotsContainer) {
  heroSlides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Перейти к слайду ${index + 1}`);
    dot.addEventListener('click', () => {
      showHeroSlide(index);
    });
    heroDotsContainer.appendChild(dot);
  });

  const heroDots = Array.from(heroDotsContainer.children);

  function showHeroSlide(index) {
    const safeIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === safeIndex);
    });
    heroDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === safeIndex);
    });
    heroCurrentSlide = safeIndex;
  }

  let heroCurrentSlide = 0;
  showHeroSlide(0);

  heroButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.direction === 'next' ? 1 : -1;
      showHeroSlide(heroCurrentSlide + direction);
    });
  });

  setInterval(() => {
    showHeroSlide(heroCurrentSlide + 1);
  }, 6500);
}

const projectGroups = Array.from(document.querySelectorAll('.project-stage-slider'));
const filterButtons = Array.from(document.querySelectorAll('.filter-chip'));

function initProjectSlider(groupName) {
  const stage = document.querySelector(`.project-stage-slider[data-group="${groupName}"]`);
  if (!stage) return;

  const slides = Array.from(stage.querySelectorAll('.project-slide'));
  const dotsContainer = stage.querySelector('.project-slider-dots');
  const prev = stage.querySelector('.project-prev');
  const next = stage.querySelector('.project-next');

  if (!slides.length || !dotsContainer) return;

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Перейти к проекту ${index + 1}`);
    dot.addEventListener('click', () => {
      showProjectSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);
  let currentSlide = 0;

  function showProjectSlide(index) {
    const safeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === safeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === safeIndex);
    });
    currentSlide = safeIndex;
  }

  showProjectSlide(0);

  prev?.addEventListener('click', () => {
    showProjectSlide(currentSlide - 1);
  });

  next?.addEventListener('click', () => {
    showProjectSlide(currentSlide + 1);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextGroup = button.dataset.group;
    projectGroups.forEach((group) => {
      group.classList.toggle('is-active', group.dataset.group === nextGroup);
    });
    filterButtons.forEach((item) => {
      const isActive = item.dataset.group === nextGroup;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
  });
});

projectGroups.forEach((group) => {
  initProjectSlider(group.dataset.group);
});

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => observer.observe(element));

/**
 * F1 SPA Application Logic
 * Premium Hub with Dynamic Interactions
 */

const F1_DATA = {
    drivers: [
        { id: 'verstappen', name: 'Max Verstappen', team: 'Red Bull Racing', points: 219, country: 'Netherlands', number: 1, color: '#3671c6', pod: 7, wins: 7, bio: 'Triple world champion and dominant force in modern F1.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/verstappen.jpg.transform/2col/image.jpg' },
        { id: 'norris', name: 'Lando Norris', team: 'McLaren', points: 150, country: 'United Kingdom', number: 4, color: '#ff8700', pod: 6, wins: 1, bio: 'McLaren\'s star driver known for his incredible pace and consistency.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/norris.jpg.transform/2col/image.jpg' },
        { id: 'leclerc', name: 'Charles Leclerc', team: 'Ferrari', points: 148, country: 'Monaco', number: 16, color: '#e10600', pod: 5, wins: 1, bio: 'The "Il Predestinato" of Ferrari, master of qualifying.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/leclerc.jpg.transform/2col/image.jpg' },
        { id: 'sainz', name: 'Carlos Sainz', team: 'Ferrari', points: 116, country: 'Spain', number: 55, color: '#e10600', pod: 4, wins: 1, bio: 'The smooth operator, known for his tactical intelligence.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/sainz.jpg.transform/2col/image.jpg' },
        { id: 'perez', name: 'Sergio Perez', team: 'Red Bull Racing', points: 111, country: 'Mexico', number: 11, color: '#3671c6', pod: 4, wins: 0, bio: 'The King of the Streets and a master of tyre management.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/perez.jpg.transform/2col/image.jpg' },
        { id: 'piastri', name: 'Oscar Piastri', team: 'McLaren', points: 112, country: 'Australia', number: 81, color: '#ff8700', pod: 1, wins: 0, bio: 'One of the most highly-rated young talents to enter F1 in years.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/piastri.jpg.transform/2col/image.jpg' },
        { id: 'hamilton', name: 'Lewis Hamilton', team: 'Mercedes', points: 85, country: 'United Kingdom', number: 44, color: '#27f4d2', pod: 1, wins: 0, bio: 'Seven-time world champion and statistical GOAT of the sport.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.transform/2col/image.jpg' },
        { id: 'russell', name: 'George Russell', team: 'Mercedes', points: 81, country: 'United Kingdom', number: 63, color: '#27f4d2', pod: 1, wins: 0, bio: 'Mr. Consistency, leading Mercedes into a new era.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/russell.jpg.transform/2col/image.jpg' },
        { id: 'alonso', name: 'Fernando Alonso', team: 'Aston Martin', points: 41, country: 'Spain', number: 14, color: '#229971', pod: 0, wins: 0, bio: 'The veteran master, still showing incredible speed at 40+.', img: 'https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/alonso.jpg.transform/2col/image.jpg' }
    ],
    teams: [
        { id: 'redbull', name: 'Red Bull Racing', points: 330, base: 'Milton Keynes, UK', boss: 'Christian Horner', chassis: 'RB20', color: '#3671c6', drivers: ['Max Verstappen', 'Sergio Perez'], slogan: 'Gives You Wings' },
        { id: 'ferrari', name: 'Ferrari', points: 270, base: 'Maranello, Italy', boss: 'Frédéric Vasseur', chassis: 'SF-24', color: '#e10600', drivers: ['Charles Leclerc', 'Carlos Sainz'], slogan: 'Essere Ferrari' },
        { id: 'mclaren', name: 'McLaren', points: 262, base: 'Woking, UK', boss: 'Andrea Stella', chassis: 'MCL38', color: '#ff8700', drivers: ['Lando Norris', 'Oscar Piastri'], slogan: 'Whatever It Takes' },
        { id: 'mercedes', name: 'Mercedes-AMG', points: 166, base: 'Brackley, UK', boss: 'Toto Wolff', chassis: 'W15', color: '#27f4d2', drivers: ['Lewis Hamilton', 'George Russell'], slogan: 'All in Performance' },
        { id: 'astonmartin', name: 'Aston Martin', points: 58, base: 'Silverstone, UK', boss: 'Mike Krack', chassis: 'AMR24', color: '#229971', drivers: ['Fernando Alonso', 'Lance Stroll'], slogan: 'Intensity. Driven.' }
    ],
    schedule: [
        { round: 12, race: 'British Grand Prix', circuit: 'Silverstone Circuit', date: '2024-07-07', time: '14:00', status: 'upcoming', info: 'Silverstone is one of the most iconic circuits on the F1 calendar.', map: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png' },
        { round: 13, race: 'Hungarian Grand Prix', circuit: 'Hungaroring', date: '2024-07-21', time: '13:00', status: 'upcoming', info: 'The Hungaroring is a tight, twisty track that often produces exciting races.', map: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png' },
        { round: 14, race: 'Belgian Grand Prix', circuit: 'Spa-Francorchamps', date: '2024-07-28', time: '13:00', status: 'upcoming', info: 'Spa-Francorchamps is a legendary circuit known for its challenging corners.', map: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png' },
        { round: 15, race: 'Dutch Grand Prix', circuit: 'Zandvoort', date: '2024-08-25', time: '13:00', status: 'upcoming', info: 'Zandvoort returned to the F1 calendar in 2021 and is known for its banked corners.', map: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png' }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    renderStandings();
    renderSchedule();
    renderTeams();
    setupNavigation();
    setupComparison();
    updateCountdown();
    initMagneticButtons();
    initIntersectionAnimations();
    setInterval(updateCountdown, 1000);
});

// Smooth Scroll Init
function initSmoothScroll() {
    // Already handled by CSS scroll-behavior: smooth
}

// Magnetic Button Logic
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            const content = btn.querySelector('.magnetic-btn-content');
            if(content) content.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0)`;
            const content = btn.querySelector('.magnetic-btn-content');
            if(content) content.style.transform = `translate(0, 0)`;
        });
    });
}

// Intersection Observer for animations
function initIntersectionAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                if (entry.target.classList.contains('animated-stat')) {
                    animateValue(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.page-section, .f1-card, .animated-stat').forEach(el => observer.observe(el));
}

function animateValue(obj) {
    const end = parseInt(obj.getAttribute('data-value'));
    if (isNaN(end)) return;
    let start = 0;
    const duration = 2000;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * end);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Navigation logic
function setupNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.page-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('data-target');
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach(s => {
                s.classList.add('hidden');
                if (s.id === target) s.classList.remove('hidden');
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Render Standings
function renderStandings() {
    const container = document.getElementById('standings-list');
    if (!container) return;

    const driverSearchInput = document.getElementById('driver-search');
    const teamFilterSelect = document.getElementById('team-filter');

    const updateList = () => {
        const searchTerm = driverSearchInput ? driverSearchInput.value.toLowerCase() : '';
        const teamFilter = teamFilterSelect ? teamFilterSelect.value : 'all';

        const filtered = F1_DATA.drivers.filter(d => {
            const matchesSearch = d.name.toLowerCase().includes(searchTerm);
            const matchesTeam = teamFilter === 'all' || d.team === teamFilter;
            return matchesSearch && matchesTeam;
        }).sort((a, b) => b.points - a.points);

        container.innerHTML = filtered.map((driver, index) => `
            <div class="glass-panel f1-card p-4 rounded-xl flex items-center justify-between table-row-animate group cursor-pointer" onclick="showDriverModal('${driver.id}')">
                <div class="flex items-center gap-6">
                    <span class="font-f1-title text-3xl font-black italic opacity-10 w-12 group-hover:opacity-100 transition-opacity" style="color: ${driver.color}">${index + 1}</span>
                    <div class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-red-600 transition-colors">
                        <img src="${driver.img}" class="w-full h-full object-cover img-hover-effect" alt="${driver.name}">
                    </div>
                    <div>
                        <h3 class="font-f1-title text-xl font-bold tracking-tight">${driver.name}</h3>
                        <p class="text-xs uppercase tracking-widest opacity-50 font-bold" style="color: ${driver.color}">${driver.team}</p>
                    </div>
                </div>
                <div class="text-right">
                    <span class="font-f1-title text-3xl font-black text-white group-hover:text-red-600 transition-colors animated-stat" data-value="${driver.points}">0</span>
                    <p class="text-[10px] uppercase font-bold opacity-30 tracking-widest">Points</p>
                </div>
            </div>
        `).join('');
    };

    if (driverSearchInput) driverSearchInput.addEventListener('input', updateList);
    if (teamFilterSelect) teamFilterSelect.addEventListener('change', updateList);
    updateList();
}

// Show Driver Modal (Simplified for the task)
window.showDriverModal = (id) => {
    const driver = F1_DATA.drivers.find(d => d.id === id);
    if (!driver) return;
    
    const modalHtml = `
        <div id="driver-modal" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
            <div class="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border-white/10 shadow-2xl">
                <button onclick="this.closest('#driver-modal').remove()" class="absolute top-8 right-8 text-white/50 hover:text-white z-10">
                    <i class="fas fa-times text-2xl"></i>
                </button>
                <div class="grid md:grid-cols-2">
                    <div class="h-[400px] md:h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style="background-image: url('${driver.img}')"></div>
                    <div class="p-12 space-y-8">
                        <div>
                            <span class="font-f1-title text-6xl font-black text-white/10 block leading-none mb-2">#${driver.number}</span>
                            <h2 class="font-f1-title text-5xl font-black uppercase italic leading-none">${driver.name}</h2>
                            <p class="text-red-600 font-bold uppercase tracking-[0.3em] mt-2">${driver.team}</p>
                        </div>
                        <p class="text-lg opacity-70 leading-relaxed">${driver.bio}</p>
                        <div class="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <p class="text-[10px] uppercase font-black opacity-30 tracking-widest mb-1">Country</p>
                                <p class="font-f1-title text-xl font-bold">${driver.country}</p>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase font-black opacity-30 tracking-widest mb-1">Podiums</p>
                                <p class="font-f1-title text-xl font-bold">${driver.pod}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// Render Schedule
function renderSchedule() {
    const container = document.getElementById('schedule-grid');
    if (!container) return;

    container.innerHTML = F1_DATA.schedule.map((race, index) => `
        <div class="glass-panel p-8 rounded-3xl f1-card group border-l-8 transition-all hover:glow-neon-blue" style="border-left-color: var(--f1-red)">
            <div class="flex justify-between items-start mb-6">
                <div>
                    <span class="text-xs font-black px-3 py-1 bg-white/10 rounded-full text-red-600 uppercase tracking-widest mb-4 inline-block">ROUND ${race.round}</span>
                    <h3 class="font-f1-title text-3xl font-black italic tracking-tighter uppercase group-hover:text-red-600 transition-colors">${race.race}</h3>
                </div>
                <div class="w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity">
                    <img src="${race.map}" class="w-full h-full object-contain invert" alt="Track Map">
                </div>
            </div>
            <div class="space-y-4">
                <div class="flex items-center gap-3 text-sm opacity-60">
                    <i class="fas fa-map-marker-alt text-red-600"></i>
                    <span class="font-bold">${race.circuit}</span>
                </div>
                <div class="flex items-center gap-6">
                    <div class="flex flex-col">
                        <span class="text-[10px] uppercase font-black opacity-30">Date</span>
                        <span class="font-f1-title font-bold">${new Date(race.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[10px] uppercase font-black opacity-30">Time</span>
                        <span class="font-f1-title font-bold">${race.time}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Teams
function renderTeams() {
    const container = document.getElementById('teams-grid');
    if (!container) return;

    container.innerHTML = F1_DATA.teams.map((team, index) => `
        <div class="glass-panel p-8 rounded-3xl f1-card group overflow-hidden border-t-8" style="border-t-color: ${team.color}">
            <div class="flex justify-between items-start mb-8">
                <div>
                    <h3 class="font-f1-title text-4xl font-black italic tracking-tighter">${team.name}</h3>
                    <p class="text-sm font-bold opacity-50 uppercase tracking-[0.2em] mt-1">${team.slogan}</p>
                </div>
                <span class="text-6xl font-black opacity-5 group-hover:opacity-20 transition-opacity" style="color: ${team.color}">${index + 1}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="bg-black/20 p-4 rounded-xl">
                    <p class="text-[10px] uppercase font-black opacity-30 mb-1">Base</p>
                    <p class="text-xs font-bold">${team.base}</p>
                </div>
                <div class="bg-black/20 p-4 rounded-xl">
                    <p class="text-[10px] uppercase font-black opacity-30 mb-1">Chassis</p>
                    <p class="text-xs font-bold">${team.chassis}</p>
                </div>
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <p class="text-[10px] uppercase font-black opacity-30 mb-1">Points</p>
                    <p class="font-f1-title text-3xl font-black animated-stat" data-value="${team.points}">0</p>
                </div>
                <button class="magnetic-btn bg-white/5 hover:bg-red-600 text-white p-4 rounded-xl transition-all">
                    <i class="fas fa-arrow-right magnetic-btn-content"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// News Section Rendering
function renderNews() {
    const container = document.getElementById('news-grid');
    if (!container) return;

    container.innerHTML = F1_DATA.news.map(n => `
        <div class="glass-panel rounded-3xl overflow-hidden f1-card group">
            <div class="h-64 overflow-hidden relative">
                <img src="${n.img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${n.title}">
                <div class="absolute top-6 left-6">
                    <span class="bg-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">${n.category}</span>
                </div>
            </div>
            <div class="p-8">
                <p class="text-[10px] font-bold opacity-40 uppercase mb-3">${n.time}</p>
                <h3 class="font-f1-title text-2xl font-black leading-tight group-hover:text-red-600 transition-colors cursor-pointer">${n.title}</h3>
                <p class="mt-4 text-sm opacity-60 line-clamp-2">${n.content}</p>
            </div>
        </div>
    `).join('');
}

// Comparison Logic
function setupComparison() {
    const s1 = document.getElementById('driver-1-select');
    const s2 = document.getElementById('driver-2-select');
    if (!s1 || !s2) return;

    const options = F1_DATA.drivers.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
    s1.innerHTML = options;
    s2.innerHTML = options;
    s2.selectedIndex = 1;

    const updateComp = () => {
        const d1 = F1_DATA.drivers.find(d => d.id === s1.value);
        const d2 = F1_DATA.drivers.find(d => d.id === s2.value);
        
        document.getElementById('comp-name-1').innerText = d1.name;
        document.getElementById('comp-name-2').innerText = d2.name;
        
        const maxPts = Math.max(...F1_DATA.drivers.map(d => d.points));
        const pts1 = (d1.points/maxPts)*100;
        const pts2 = (d2.points/maxPts)*100;

        document.getElementById('bar-pts-1').style.width = `${pts1}%`;
        document.getElementById('bar-pts-2').style.width = `${pts2}%`;
        document.getElementById('val-pts-1').innerText = d1.points;
        document.getElementById('val-pts-2').innerText = d2.points;

        const maxWins = Math.max(...F1_DATA.drivers.map(d => d.wins)) || 1;
        document.getElementById('bar-wins-1').style.width = `${(d1.wins/maxWins)*100}%`;
        document.getElementById('bar-wins-2').style.width = `${(d2.wins/maxWins)*100}%`;
        document.getElementById('val-wins-1').innerText = d1.wins;
        document.getElementById('val-wins-2').innerText = d2.wins;
    };

    s1.addEventListener('change', updateComp);
    s2.addEventListener('change', updateComp);
    updateComp();
}

// Countdown
function updateCountdown() {
    const nextRace = new Date('2024-07-07T14:00:00');
    const now = new Date();
    const diff = nextRace - now;

    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if(el) el.innerText = val.toString().padStart(2, '0');
    };

    setVal('cd-days', d);
    setVal('cd-hours', h);
    setVal('cd-mins', m);
    setVal('cd-secs', s);
}

// Quiz System
function setupQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    let currentQ = 0;
    const showQ = () => {
        const q = F1_DATA.quiz[currentQ];
        container.innerHTML = `
            <div class="space-y-8 animate-slide-up">
                <p class="text-red-600 font-black uppercase tracking-[0.4em] text-xs">Question ${currentQ + 1} of ${F1_DATA.quiz.length}</p>
                <h3 class="font-f1-title text-3xl font-black leading-tight">${q.question}</h3>
                <div class="grid gap-4">
                    ${q.options.map(opt => `
                        <button onclick="checkAnswer('${opt}', '${q.answer}')" class="bg-white/5 border border-white/10 hover:border-red-600 p-6 rounded-2xl text-left font-bold transition-all hover:bg-white/10 group">
                            <span class="opacity-40 group-hover:opacity-100 mr-4">/</span> ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    };

    window.checkAnswer = (selected, correct) => {
        if (selected === correct) {
            currentQ++;
            if (currentQ < F1_DATA.quiz.length) showQ();
            else container.innerHTML = `
                <div class="text-center py-12 animate-slide-up">
                    <i class="fas fa-trophy text-6xl text-red-600 mb-6"></i>
                    <h3 class="font-f1-title text-4xl font-black mb-4">LEGEND STATUS!</h3>
                    <p class="opacity-60 mb-8">You know your F1 history like a pro.</p>
                    <button onclick="location.reload()" class="magnetic-btn px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest"><span class="magnetic-btn-content">Reset Quiz</span></button>
                </div>
            `;
        } else {
            alert('Wrong! Try again champion.');
        }
    };

    showQ();
}

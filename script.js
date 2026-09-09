const VIDEOS_DATA = [
    {
        id: 1,
        title: "¿Qué es Kali Linux? Todo lo que debes saber",
        description: "Una introducción completa a Kali Linux: qué es, para qué sirve, cómo surgió y por qué es la distribución favorita de los profesionales de la seguridad.",
        category: "intro",
        url: "https://www.youtube.com/embed/umpYZiIhWz0",
        thumbnail: "images/kali-desktop.png",
        duration: "12:01",
        rating: 4.8,
        date: "2026-08-15",
        tags: ["kali linux", "introduccion", "ciberseguridad"]
    },
    {
        id: 2,
        title: "Kali Linux en menos de 5 minutos (Guía rápida)",
        description: "La guía rápida con los conceptos esenciales para empezar con Kali Linux sin rodeos.",
        category: "intro",
        url: "https://www.youtube.com/embed/9y7A3KYgPAo",
        thumbnail: "images/kali-2021.png",
        duration: "03:09",
        rating: 4.9,
        date: "2026-08-20",
        tags: ["kali linux", "guia rapida", "resumen"]
    },
    {
        id: 3,
        title: "Tu primera herramienta de pruebas de penetración",
        description: "Descubre cómo Kali Linux es la puerta de entrada al hacking ético y a las pruebas de penetración profesionales.",
        category: "intro",
        url: "https://www.youtube.com/embed/q7h14f5eydk",
        thumbnail: "images/kali-menu.png",
        duration: "15:25",
        rating: 4.7,
        date: "2026-08-22",
        tags: ["pentesting", "primeros pasos", "hacking etico"]
    },
    {
        id: 4,
        title: "Cómo descargar e instalar Kali Linux paso a paso",
        description: "Guía paso a paso para descargar el ISO oficial e instalar Kali Linux, incluyendo el arranque desde USB y las particiones de disco.",
        category: "instalacion",
        url: "https://www.youtube.com/embed/oppgkgNpj58",
        thumbnail: "images/kali-explorer.png",
        duration: "22:47",
        rating: 4.6,
        date: "2026-07-30",
        tags: ["descarga", "instalacion", "iso"]
    },
    {
        id: 5,
        title: "Cómo instalar Kali Linux en un PC desde cero",
        description: "Instalación completa de Kali Linux en un PC, desde el arranque del instalador hasta el primer inicio de sesión como root.",
        category: "instalacion",
        url: "https://www.youtube.com/embed/56VTPxJ0QEc",
        thumbnail: "images/kali-undercover.png",
        duration: "09:45",
        rating: 4.5,
        date: "2026-07-25",
        tags: ["instalacion", "pc", "paso a paso"]
    },
    {
        id: 6,
        title: "Kali Linux: instalación y primeros pasos éticos",
        description: "Aprende a instalar Kali Linux y configura tu entorno para empezar a auditar redes y sistemas de forma responsable.",
        category: "instalacion",
        url: "https://www.youtube.com/embed/AnwgxRtWXLI",
        thumbnail: "images/kali-terminal.png",
        duration: "16:09",
        rating: 4.7,
        date: "2026-08-10",
        tags: ["instalacion", "hacking etico", "redes"]
    },
    {
        id: 7,
        title: "Nmap: tutorial para encontrar vulnerabilidades de red",
        description: "Aprende a utilizar Nmap, la herramienta de escaneo de redes más famosa de Kali Linux, para descubrir puertos y servicios en tu red.",
        category: "herramientas",
        url: "https://www.youtube.com/embed/4t4kBkMsDbQ",
        thumbnail: "images/kali-desktop.png",
        duration: "17:08",
        rating: 4.8,
        date: "2026-08-12",
        tags: ["nmap", "escaneo", "redes"]
    },
    {
        id: 8,
        title: "Metasploit para principiantes",
        description: "Una clase corta y directa sobre el framework Metasploit: exploits, payloads y cómo funciona la post-explotación.",
        category: "herramientas",
        url: "https://www.youtube.com/embed/8wgTtIzN3Xc",
        thumbnail: "images/kali-2021.png",
        duration: "04:20",
        rating: 4.9,
        date: "2026-09-01",
        tags: ["metasploit", "exploits", "payloads"]
    },
    {
        id: 9,
        title: "Metasploit: módulos, exploits y payloads",
        description: "Un curso introductorio al Metasploit Framework explicando la estructura de módulos, exploits y payloads paso a paso.",
        category: "herramientas",
        url: "https://www.youtube.com/embed/8lR27r8Y_ik",
        thumbnail: "images/kali-wallpaper.jpg",
        duration: "22:59",
        rating: 4.6,
        date: "2026-08-28",
        tags: ["metasploit", "modulos", "explotacion"]
    },
    {
        id: 10,
        title: "Kali Linux: tutorial completo para principiantes",
        description: "Recorrido por Kali Linux en 2026: escritorio, herramientas preinstaladas y flujos de trabajo típicos de un pentester.",
        category: "pentesting",
        url: "https://www.youtube.com/embed/WPZAdOMnqEo",
        thumbnail: "images/kali-menu.png",
        duration: "25:32",
        rating: 4.7,
        date: "2026-08-05",
        tags: ["tutorial", "principiantes", "pentesting"]
    },
    {
        id: 11,
        title: "Kali Linux Basics: tutorial para empezar",
        description: "Conceptos básicos de Kali Linux para usuarios nuevos: terminal, permisos, comandos esenciales y herramientas clave.",
        category: "pentesting",
        url: "https://www.youtube.com/embed/Yg4tV98y69I",
        thumbnail: "images/kali-explorer.png",
        duration: "17:08",
        rating: 4.6,
        date: "2026-08-25",
        tags: ["basics", "comandos", "terminal"]
    },
    {
        id: 12,
        title: "Curso básico definitivo de Kali Linux desde cero",
        description: "El curso más completo para principiantes: de las bases de Linux hasta las herramientas de auditoría de Kali, todo desde cero.",
        category: "pentesting",
        url: "https://www.youtube.com/embed/csxy3LQB4X0",
        thumbnail: "images/kali-undercover.png",
        duration: "46:55",
        rating: 4.8,
        date: "2026-09-05",
        tags: ["curso", "desde cero", "auditoria"]
    }
];

const REVIEWS_DATA = [
    {
        name: "Ing. de Seguridad (G2)",
        rating: 5,
        text: "Como ingeniero de seguridad trabajando en el campo de la ciberseguridad durante los últimos cuatro años, con experiencia práctica en pentesting, evaluaciones de vulnerabilidades y auditorías de seguridad, Kali Linux me ha sido útil para todas estas tareas.",
        date: "2026-09-08",
        source: "https://www.g2.com/products/kali-linux/reviews"
    },
    {
        name: "Profesional TI (PeerSpot)",
        rating: 4,
        text: "Kali Linux funciona de forma eficiente en distintos dispositivos y agiliza los flujos de trabajo de pruebas de penetración. Eso sí, podría mejorar incluyendo más herramientas de serie y su gestor de arranque GRUB a veces acaba dañándose.",
        date: "2026-09-07",
        source: "https://www.peerspot.com/products/comparisons/kali-linux_vs_ubuntu-linux"
    },
    {
        name: "Equipo It's FOSS",
        rating: 4,
        text: "Kali Linux no es para todo el mundo (\"Not Everyone's Cup of Tea\"): es excelente para auditorías y pentesting, pero al no traer aplicaciones de productividad no es una buena opción para el uso diario como escritorio.",
        date: "2026-09-06",
        source: "https://itsfoss.com/kali-linux-review"
    },
    {
        name: "Analista Comparitech",
        rating: 4,
        text: "Es la distribución de seguridad por excelencia: trae más de 600 herramientas listas y tiene una gran comunidad detrás. Como contras, requiere conocimientos previos de Linux y experiencia para aprovechar todo su potencial.",
        date: "2026-09-05",
        source: "https://www.comparitech.com/net-admin/kali-linux-review"
    },
    {
        name: "The CTO Club",
        rating: 5,
        text: "Le damos 4.5 sobre 5: es una opción sólida para pruebas de penetración con actualizaciones frecuentes y una colección de herramientas enorme. El único punto flojo es que su interfaz no es apta para principiantes.",
        date: "2026-09-04",
        source: "https://thectoclub.com/tools/kali-linux-review"
    },
    {
        name: "Dedoimedo",
        rating: 4,
        text: "Una experiencia interesante y abrumadora a la vez por la cantidad de herramientas de seguridad que incluye. Es un sistema serio para trabajar, aunque no recomendable como distribución diaria.",
        date: "2026-09-02",
        source: "https://www.dedoimedo.com/computers/kali-linux.html"
    },
    {
        name: "Usuario anónimo (Reddit)",
        rating: 3,
        text: "Está muy cargado (bloated): mete todas las herramientas posibles de primeras y se rompe con facilidad con las actualizaciones, por eso está tan odiada como daily driver. Mejor instalar las herramientas puntuales sobre Debian/Ubuntu.",
        date: "2026-09-01",
        source: "https://www.reddit.com/r/linuxquestions/comments/zc7bbf/why_is_kali_linux_so_hated_as_a_daily_driver"
    },
    {
        name: "Miembro Linux.org Forum",
        rating: 4,
        text: "La gran ventaja de Kali es la conveniencia: todo en uno, con cientos de herramientas preinstaladas y listas para auditar. Eso es lo que la diferencia de montar cada herramienta por separado.",
        date: "2026-08-30",
        source: "https://www.linux.org/threads/whats-the-advantage-of-kali-linux.50361"
    },
    {
        name: "Guía IONOS",
        rating: 4,
        text: "Kali Linux es potente pero exige experiencia previa: tiene una curva de aprendizaje pronunciada y no está pensada para quien empieza desde cero con Linux, so pena de cometer errores de seguridad.",
        date: "2026-08-29",
        source: "https://www.ionos.com/es-us/digitalguide/servidores/configuracion/kali-linux"
    },
    {
        name: "System Weakness",
        rating: 4,
        text: "Frente a distribuciones como BlackArch, Kali está orientada al pentester principiante: más fácil de usar, con gran soporte de la comunidad y actualizaciones frecuentes. Ideal para empezar en ciberseguridad.",
        date: "2026-08-27",
        source: "https://systemweakness.com/black-arch-vs-kali-linux-109d86aab2b7"
    }
];

// --- DOM Elements ---
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const videoGrid = document.getElementById('videoGrid');
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const chipBtns = document.querySelectorAll('.chip');
const starRating = document.getElementById('starRating');
const downloadImage = document.getElementById('downloadImage');
const downloadVideo = document.getElementById('downloadVideo');
const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeBtn = document.getElementById('welcomeBtn');
const welcomeEnter = document.getElementById('welcomeEnter');
const welcomeVideo = document.getElementById('welcomeVideo');
const welcomeAbout = document.getElementById('welcomeAbout');

let selectedRating = 0;
let currentCategory = 'all';

// --- Welcome Screen ---
document.body.style.overflow = 'hidden';

welcomeBtn.addEventListener('click', () => {
    welcomeAbout.classList.add('hidden-about');

    setTimeout(() => {
        welcomeVideo.innerHTML = `
            <p class="welcome-video-hint"><span class="intro-badge">INTRO</span> ¿Qué es Kali Linux? Un vídeo de 3 minutos que lo explica y lo muestra</p>
            <div class="intro-player">
                <video src="videos/intro_kali.mp4" controls autoplay playsinline></video>
            </div>
        `;
        welcomeVideo.classList.add('visible-video');
    }, 400);

    welcomeBtn.classList.add('hidden-btn');
    welcomeEnter.classList.add('show-skip');
});

welcomeEnter.addEventListener('click', () => {
    welcomeOverlay.classList.add('closed');
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Tab Navigation ---
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
});

// --- Category Chips ---
chipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
        chipBtns.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentCategory = chip.dataset.category;
        renderVideos();
    });
});

// --- Render Videos ---
function renderVideos(filter = '') {
    let allVideos = [...VIDEOS_DATA];

    if (currentCategory !== 'all') {
        allVideos = allVideos.filter(v => v.category === currentCategory);
    }

    if (filter) {
        const f = filter.toLowerCase();
        allVideos = allVideos.filter(v =>
            v.title.toLowerCase().includes(f) ||
            v.description.toLowerCase().includes(f) ||
            v.tags.some(t => t.toLowerCase().includes(f))
        );
    }

    videoGrid.innerHTML = allVideos.map(video => `
        <div class="video-card" onclick="openVideoModal(${JSON.stringify(video).replace(/"/g, '&quot;')})">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='images/kali-desktop.png'">
                <div class="play-btn">▶</div>
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <div class="video-meta">
                    <span class="category-tag">${video.category}</span>
                    <span class="video-rating">★ ${video.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// --- Search ---
searchInput.addEventListener('input', (e) => {
    renderVideos(e.target.value);
});

// --- Video Modal ---
function openVideoModal(video) {
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.innerHTML = `<iframe src="${video.url}" allowfullscreen></iframe>`;
    document.getElementById('modalTitle').textContent = video.title;
    document.getElementById('modalDescription').textContent = video.description;
    document.getElementById('modalCategory').textContent = video.category;
    document.getElementById('modalDate').textContent = video.date;
    document.getElementById('modalRating').textContent = `★ ${video.rating}`;

    downloadImage.href = video.thumbnail;
    downloadImage.setAttribute('download', `${video.title.split(' ').join('_')}_thumbnail.jpg`);

    const watchUrl = video.watchUrl || video.url.replace('embed/', 'watch?v=');
    downloadVideo.href = watchUrl;
    downloadVideo.setAttribute('target', '_blank');

    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    document.getElementById('modalVideo').innerHTML = '';
    document.body.style.overflow = '';
});

document.querySelector('.modal-overlay').addEventListener('click', () => {
    videoModal.classList.add('hidden');
    document.getElementById('modalVideo').innerHTML = '';
    document.body.style.overflow = '';
});

// --- Star Rating ---
starRating.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value);
        starRating.querySelectorAll('.star').forEach((s, i) => {
            s.classList.toggle('active', i < selectedRating);
        });
    });

    star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.value);
        starRating.querySelectorAll('.star').forEach((s, i) => {
            s.classList.toggle('active', i < val);
        });
    });
});

starRating.addEventListener('mouseleave', () => {
    starRating.querySelectorAll('.star').forEach((s, i) => {
        s.classList.toggle('active', i < selectedRating);
    });
});

// --- Render Reviews ---
function renderReviews() {
    reviewsList.innerHTML = REVIEWS_DATA.map(review => {
        const initials = review.name.split(' ').map(n => n[0]).join('');
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const source = review.source
            ? `<a class="review-source" href="${review.source}" target="_blank" rel="noopener noreferrer">Fuente: ${review.source.replace(/^https?:\/\//, '')}</a>`
            : '';
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewviewer-info">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">${initials}</div>
                            <span class="reviewer-name">${review.name}</span>
                        </div>
                    </div>
                    <span class="review-date">${formatDate(review.date)}</span>
                </div>
                <div class="review-stars">${stars}</div>
                <p class="review-text">${review.text}</p>
                ${source}
            </div>
        `;
    }).join('');

    updateRatingSummary();
}

function updateRatingSummary() {
    const avg = REVIEWS_DATA.reduce((acc, r) => acc + r.rating, 0) / REVIEWS_DATA.length;
    document.getElementById('avgRating').textContent = avg.toFixed(1);
    document.getElementById('totalReviews').textContent = `${REVIEWS_DATA.length} reviews`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

// --- Review Form ---
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (selectedRating === 0) {
        alert('Por favor selecciona una calificación');
        return;
    }

    const name = document.getElementById('reviewerName').value;
    const text = document.getElementById('reviewText').value;

    REVIEWS_DATA.unshift({
        name,
        rating: selectedRating,
        text,
        date: new Date().toISOString().split('T')[0]
    });

    reviewForm.reset();
    selectedRating = 0;
    starRating.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    renderReviews();
});

// --- Init ---
renderVideos();
renderReviews();

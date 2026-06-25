export const projectsData = [
    {
        image: './public/images/technorra_hero.png',
        title: 'Technorra Digital Agency',
        tags: ['Agency', 'Web Development', 'Digital Solutions'],
        description: 'Technorra adalah agensi digital yang berfokus pada penyediaan solusi teknologi dan desain kreatif untuk membantu bisnis berkembang di era modern. Platform ini merupakan wajah utama dari layanan unggulan kami.',
        link: 'https://technorra.vercel.app'
    },
    {
        image: './public/images/1p.jpg',
        title: 'Web eRecruitment',
        tags: ['React', 'Laravel', 'MYSQL', 'TailwindCSS'],
        description: 'Sebuah platform eRecruitment lengkap dengan fitur pelamar bisa melihat lowongan pekerjaan, melamar, dan mengikuti tes administrasi, psikotes, dan wawancara. Dibangun dengan tumpukan MERN dan antarmuka pengguna yang responsif menggunakan Tailwind CSS.',
        link: 'https://github.com/bagusahmadka/eRecruitment-Laravel.git'
    },
    {
        image: './public/images/p2.jpg',
        title: 'Univgo',
        tags: ['Flutter', 'MYSQL', 'Dart'],
        description: 'Aplikasi berbasis mobile untuk memberikan kemudahan lulusan SMA/SMK dalam mencari universitas yang dia suka. Memungkinkan pengguna mencari dan melacak universitas dengan antarmuka yang intuitif.',
        link: 'https://github.com/bagusahmadka/Univgo.git'
    },
    {
        image: './public/images/6.jpg',
        title: 'Portofolio Pribadi',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        description: 'Website portofolio pribadi yang menawan untuk saya sebagai web developer, menampilkan project-project dengan animasi halus dan desain yang elegan.',
        link: 'https://github.com/bagusahmadka/bagusahmadka.github.io.git'
    },
    {
        image: './public/images/lg.jpg',
        title: 'Mitra Jaya Print',
        tags: ['Laravel', 'Filament', 'MYSQL'],
        description: 'Mitra Jaya Print adalah sistem manajemen percetakan Web-to-Print berbasis Laravel dengan dukungan Filament Admin Panel. Sistem ini dirancang khusus untuk memudahkan pelanggan dalam memesan berbagai produk digital printing secara online.',
        link: 'https://github.com/bagusahmadka/filament-mjp.git'
    },
    {
        image: './public/images/waste.jpeg',
        title: 'Waste Classifier App',
        tags: ['Python', 'TensorFlow', 'Flask'],
        description: 'Aplikasi klasifikasi sampah berbasis machine learning yang dapat mengenali berbagai jenis sampah dan memberikan rekomendasi pengolahan yang tepat.',
        link: 'https://github.com/bagusahmadka/waste_classifier_app.git'
    },
    {
        image: './public/images/syntara.jpg',
        title: 'Syntara (Publikasi Jurnal)',
        tags: ['Web Development', 'Portal Jurnal'],
        description: 'Aplikasi web platform jasa publikasi jurnal bernama Syntara. Sistem ini dirancang untuk memudahkan proses pengelolaan dan publikasi karya ilmiah serta jurnal secara efisien.',
        link: 'https://syntarapublikasi.my.id/'
    },
    {
        image: './public/images/traciio.jpg',
        title: 'Traciio (Sistem CRM)',
        tags: ['CRM', 'Web Application'],
        description: 'Traciio adalah sistem Customer Relationship Management (CRM) yang dibangun untuk membantu bisnis dalam mengelola interaksi pelanggan, pencatatan data penjualan, dan efisiensi operasional.',
        link: 'https://github.com/Vdevelops/Traciio.git'
    },
    {
        image: './public/images/undangan-nikah.jpg',
        title: 'Undangan Nikah Digital',
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Template website undangan pernikahan digital yang modern dan elegan. Memiliki fitur informasi detail acara, cerita pasangan, hingga lokasi interaktif yang memanjakan tamu undangan.',
        link: 'https://github.com/bagusahmadka/undangan-nikah.git'
    },
    {
        image: './public/images/ngunduh-mantu.jpg',
        title: 'Undangan Ngunduh Mantu',
        tags: ['HTML', 'CSS', 'JavaScript'],
        description: 'Website undangan digital khusus untuk acara perayaan Ngunduh Mantu. Didesain dengan tampilan responsif, animasi halus, dan kemudahan akses di berbagai perangkat seluler.',
        link: 'https://github.com/bagusahmadka/ngunduh-mantu.git'
    }
];

export function setupProjects() {
    const projectGallery = document.getElementById('project-gallery');
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const modalTagsContainer = document.getElementById('modal-tags');

    const errorSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%231e3a5f'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%2300e5cc'%3EError%3C/text%3E%3C/svg%3E";

    if (!projectGallery) return;

    projectGallery.innerHTML = '';

    const INITIAL_COUNT = 6;
    let currentlyShown = 0;

    function renderProjects(start, end) {
        const projectsToRender = projectsData.slice(start, end);
        projectsToRender.forEach((project, i) => {
            const index = start + i;
            const card = document.createElement('div');
            card.className = 'reveal reveal-up';
            // Only add transition delay for the initial batch to prevent weird delays on click
            if (start === 0) {
                card.style.transitionDelay = `${i * 100}ms`;
            } else {
                card.style.transitionDelay = `0ms`;
            }

            card.innerHTML = `
                <div class="project-card" data-index="${index}">
                    <div class="project-img-wrapper">
                        <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='${errorSVG}'">
                        <div class="project-overlay">
                            <span class="project-overlay-text"><i class="fas fa-search-plus"></i> Lihat Detail</span>
                        </div>
                    </div>
                    <div class="project-body">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <p class="project-desc">${project.description}</p>
                    </div>
                </div>
            `;

            // Attach click handler directly to the newly created card
            card.querySelector('.project-card').addEventListener('click', function () {
                openModal(projectsData[this.dataset.index]);
            });

            projectGallery.appendChild(card);

            // If these are loaded via the button (not initial), trigger their animation manually
            if (start > 0) {
                setTimeout(() => {
                    card.classList.add('reveal-active');
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                }, i * 100 + 50);
            }
        });
        currentlyShown = end;
    }

    // Initial render
    renderProjects(0, Math.min(INITIAL_COUNT, projectsData.length));

    // Show More Button
    if (projectsData.length > INITIAL_COUNT) {
        const btnContainer = document.createElement('div');
        btnContainer.style.textAlign = 'center';
        btnContainer.style.marginTop = '48px';
        btnContainer.style.width = '100%';
        btnContainer.style.gridColumn = '1 / -1'; // Ensure it spans full width if inside grid, but we will append to parent just in case.

        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'btn-outline';
        showMoreBtn.style.cursor = 'pointer';
        showMoreBtn.innerHTML = 'Tampilkan Lebih Banyak <i class="fas fa-chevron-down" style="margin-left:8px;"></i>';

        showMoreBtn.addEventListener('click', () => {
            renderProjects(currentlyShown, projectsData.length);
            showMoreBtn.style.display = 'none';
        });

        btnContainer.appendChild(showMoreBtn);
        // Append after the gallery
        projectGallery.parentNode.appendChild(btnContainer);
    }

    function openModal(project) {
        if (!projectModal) return;
        const img = new Image();
        img.onload = () => { modalImg.src = project.image; };
        img.onerror = () => { modalImg.src = errorSVG; };
        img.src = project.image;

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTagsContainer.innerHTML = project.tags.map(tag =>
            `<span class="modal-tag">${tag}</span>`
        ).join('');

        if (project.link && project.link !== '#') {
            modalLink.href = project.link;
            modalLink.classList.remove('hidden');
        } else {
            modalLink.classList.add('hidden');
        }

        projectModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!projectModal) return;
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    closeModalBtn?.addEventListener('click', closeModal);
    projectModal?.addEventListener('click', e => { if (e.target === projectModal) closeModal(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) closeModal();
    });
}
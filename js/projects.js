export const projectsData = [
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
    }
];

export function renderProjects() {
    // SVG fallback untuk error gambar
    const errorImageSVG = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError Memuat Gambar%3C/text%3E%3C/svg%3E';
    
    return `
    <section id="projects" class="py-16 md:py-24 bg-slate-100">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-indigo-600 after:rounded-full">
                Proyek Unggulan
            </h2>
            <div id="project-gallery" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
        </div>
    </section>

    <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 hidden z-[100] transition-opacity duration-300 opacity-0">
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-2xl w-full relative transform scale-95 transition-transform duration-300">
            <button id="close-modal-btn" class="absolute top-4 right-4 text-slate-500 hover:text-red-600 text-2xl transition-colors" aria-label="Tutup modal">
                <i class="fas fa-times"></i>
            </button>
            <div class="w-full max-h-80 flex items-center justify-center overflow-hidden rounded-lg mb-4 bg-slate-100">
                <img id="modal-img" src="" alt="Detail Proyek" class="w-full h-auto object-contain" onerror="this.onerror=null; this.src='${errorImageSVG}';">
            </div>
            <h3 id="modal-title" class="text-2xl font-bold mb-2 text-slate-800"></h3>
            <div id="modal-tags" class="mb-3"></div>
            <p id="modal-description" class="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed max-h-40 overflow-y-auto"></p>
            <a id="modal-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
                <i class="fas fa-external-link-alt mr-2"></i> Kunjungi Proyek
            </a>
        </div>
    </div>
    `;
}

export function setupProjects() {
    const projectGallery = document.getElementById('project-gallery');
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const modalTagsContainer = document.getElementById('modal-tags');
    
    // SVG fallback untuk error gambar
    const errorImageSVG = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError%3C/text%3E%3C/svg%3E';

    if (!projectGallery) return;
    
    // Display Projects
    projectGallery.innerHTML = ''; 
    projectsData.forEach((project, index) => {
        const projectItem = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer group" data-index="${index}">
                <div class="relative h-56">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" onerror="this.onerror=null; this.src='${errorImageSVG}';">
                    <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <span class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fas fa-search-plus mr-2"></i> Lihat Detail</span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-slate-800">${project.title}</h3>
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${project.tags.map(tag => `<span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">${tag}</span>`).join('')}
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed">${project.description.substring(0, 100)}...</p>
                </div>
            </div>
        `;
        projectGallery.innerHTML += projectItem;
    });

    // Setup project items click handlers
    document.querySelectorAll('#project-gallery [data-index]').forEach(item => {
        item.addEventListener('click', function() {
            openModal(projectsData[this.dataset.index]);
        });
    });

    // Modal functionality
    function openModal(project) {
        if (!modalImg || !modalTitle || !modalDescription || !modalLink || !modalTagsContainer || !projectModal) return;

        // Preload image before showing modal
        const img = new Image();
        img.onload = function() {
            modalImg.src = project.image;
        };
        img.onerror = function() {
            modalImg.src = errorImageSVG;
        };
        img.src = project.image;
        
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        modalTagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="inline-block bg-slate-200 text-slate-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">${tag}</span>`
        ).join('');

        if (project.link && project.link !== '#') {
            modalLink.href = project.link;
            modalLink.classList.remove('hidden');
        } else {
            modalLink.classList.add('hidden');
        }
        
        projectModal.classList.remove('hidden');
        setTimeout(() => { 
            projectModal.classList.remove('opacity-0');
            projectModal.querySelector('.transform').classList.remove('scale-95');
        }, 10);
        
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        if (!projectModal) return;
        
        projectModal.classList.add('opacity-0');
        const transform = projectModal.querySelector('.transform');
        if (transform) transform.classList.add('scale-95');
        
        setTimeout(() => {
            projectModal.classList.add('hidden');
        }, 300); 
        
        document.body.style.overflow = 'auto';
    }

    // Close modal handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    if (projectModal) {
        projectModal.addEventListener('click', (event) => {
            if (event.target === projectModal) { 
                closeModal();
            }
        });
    }
    
    document.addEventListener('keydown', (event) => { 
        if (event.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
            closeModal();
        }
    });
}
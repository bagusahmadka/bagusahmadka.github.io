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
    },
    {
        image: './public/images/lg.jpg',
        title: 'Mitra Jaya Print',
        tags: ['Laravel', 'Filament', 'MYSQL'],
        description: 'Mitra Jaya Print adalah sistem manajemen percetakan Web-to-Print berbasis Laravel dengan dukungan Filament Admin Panel. Sistem ini dirancang khusus untuk memudahkan pelanggan dalam memesan berbagai produk digital printing secara online dengan fitur lengkap mulai dari katalog produk, kustomisasi desain, upload file, hingga pembayaran dan pelacakan pesanan.',
        link: 'https://github.com/bagusahmadka/filament-mjp.git'
    },
    {
        image: './public/images/waste.jpeg',
        title: 'Waste Classifier App',
        tags: ['Python', 'TensorFlow', 'Flask'],
        description: 'Aplikasi klasifikasi sampah berbasis machine learning yang dapat mengenali berbagai jenis sampah dan memberikan rekomendasi pengolahan yang tepat.',
        link: 'https://github.com/bagusahmadka/waste_classifier_app.git'
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
    
    // SVG fallback untuk error gambar
    const errorImageSVG = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'400\' viewBox=\'0 0 600 400\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError%3C/text%3E%3C/svg%3E';

    if (!projectGallery) return;
    
    // Display Projects
    projectGallery.innerHTML = ''; 
    projectsData.forEach((project, index) => {
        const projectItem = `
            <div class="reveal reveal-up" style="transition-delay: ${index * 100}ms;">
                <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl dark:shadow-none dark:hover:shadow-indigo-500/20 border border-transparent dark:border-slate-700 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full flex flex-col" data-index="${index}">
                    <div class="relative h-56 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null; this.src='${errorImageSVG}';">
                        <div class="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/40 backdrop-blur-[0px] group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                            <span class="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"><i class="fas fa-search-plus mr-2"></i> Lihat Detail</span>
                        </div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${project.title}</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tags.map(tag => `<span class="text-xs bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-full font-medium border border-indigo-100 dark:border-indigo-800">${tag}</span>`).join('')}
                        </div>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-auto line-clamp-3">${project.description}</p>
                    </div>
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
            `<span class="inline-block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full">${tag}</span>`
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
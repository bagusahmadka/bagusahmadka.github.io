export function renderNavbar() {
    return `
    <nav id="navbar" class="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="#hero" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                        Bagus Ahmad Khoirul Ato'
                    </a>
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#hero" class="nav-link text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
                    <a href="#about" class="nav-link text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang Saya</a>
                    <a href="#projects" class="nav-link text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyek</a>
                    <a href="#skills" class="nav-link text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Keahlian</a>
                    <a href="#contact" class="nav-link text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Kontak</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="menu-btn" type="button" class="text-slate-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Buka menu utama</span>
                        <i class="fas fa-bars fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="md:hidden hidden bg-white shadow-lg border-t border-slate-200">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#hero" class="nav-link-mobile block text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Beranda</a>
                <a href="#about" class="nav-link-mobile block text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Tentang Saya</a>
                <a href="#projects" class="nav-link-mobile block text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Proyek</a>
                <a href="#skills" class="nav-link-mobile block text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Keahlian</a>
                <a href="#contact" class="nav-link-mobile block text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors">Kontak</a>
            </div>
        </div>
    </nav>
    `;
}

export function setupNavbar() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = mobileMenu?.querySelectorAll('.nav-link-mobile');
    const navbar = document.getElementById('navbar');
    const navLinksDesktop = document.querySelectorAll('#navbar .hidden.md\\:flex a.nav-link');
    
    // Toggle menu mobile
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? 
                '<i class="fas fa-bars fa-lg"></i>' : 
                '<i class="fas fa-times fa-lg"></i>';
        });
    }

    // Tutup menu mobile ketika link di dalamnya diklik
    if (navLinksMobile) {
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu && menuBtn) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuBtn.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
                }
            });
        });
    }

    // Efek Shadow pada Navbar saat Scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-xl');
            } else {
                navbar.classList.remove('shadow-xl');
            }
        });
    }

    // Navigasi Aktif saat Scroll
    if (navLinksDesktop && navLinksDesktop.length) {
        const sections = document.querySelectorAll('section[id], header[id]');
        
        function changeNavOnScroll() {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (navbar && (pageYOffset >= sectionTop - navbar.offsetHeight - 50)) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinksDesktop.forEach(link => {
                link.classList.remove('nav-link-active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('nav-link-active');
                }
            });
        }
        
        window.addEventListener('scroll', changeNavOnScroll);
        changeNavOnScroll();
    }
}
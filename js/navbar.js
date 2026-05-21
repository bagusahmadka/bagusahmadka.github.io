
export function setupNavbar() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = mobileMenu?.querySelectorAll('.nav-link-mobile');
    const navbar = document.getElementById('navbar');
    const navLinksDesktop = document.querySelectorAll('#nav-links-desktop a.nav-link');

    // Toggle menu mobile
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            menuBtn.innerHTML = mobileMenu.classList.contains('hidden')
                ? '<i class="fas fa-bars fa-lg"></i>'
                : '<i class="fas fa-times fa-lg"></i>';
        });
    }

    // Tutup menu mobile ketika link diklik
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
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
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
                link.classList.remove('nav-link-active', 'active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('nav-link-active', 'active');
                }
            });
        }

        window.addEventListener('scroll', changeNavOnScroll);
        changeNavOnScroll();
    }

    // Dark Mode Toggle
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');

    function updateIcons() {
        const isLight = localStorage.getItem('color-theme') === 'light';
        if (isLight) {
            themeToggleLightIcon?.classList.add('hidden');
            themeToggleDarkIcon?.classList.remove('hidden');
            themeToggleLightIconMobile?.classList.add('hidden');
            themeToggleDarkIconMobile?.classList.remove('hidden');
        } else {
            themeToggleLightIcon?.classList.remove('hidden');
            themeToggleDarkIcon?.classList.add('hidden');
            themeToggleLightIconMobile?.classList.remove('hidden');
            themeToggleDarkIconMobile?.classList.add('hidden');
        }
    }

    updateIcons();

    function toggleTheme() {
        const isLight = localStorage.getItem('color-theme') === 'light';
        if (isLight) {
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('color-theme', 'light');
        }
        updateIcons();
    }

    themeToggleBtn?.addEventListener('click', toggleTheme);
    themeToggleBtnMobile?.addEventListener('click', toggleTheme);
}
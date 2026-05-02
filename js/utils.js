
// Scroll to top functionality
export function setupScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.remove('hidden');
            scrollTopBtn.classList.add('opacity-100');
        } else {
            scrollTopBtn.classList.add('opacity-0');
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    scrollTopBtn.classList.add('hidden');
                }
            }, 300);
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Set current year for copyright
export function setupCurrentYear() {
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
}

// Inisialisasi EmailJS
export function initEmailJS() {
    const emailJsPublicKey = 'jDXVI9-bt5aOXR0OT'; // Hardcoded dari .env

    if (window.emailjs) {
        emailjs.init({ publicKey: emailJsPublicKey });
    }
}

// Fungsi untuk animasi elemen saat scroll (Scroll Reveal)
export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const revealOptions = {
        threshold: 0.15, // Memicu animasi ketika 15% elemen terlihat
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Hanya jalankan animasi sekali
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
}

// Setup all utility functions
export function setupUtils() {
    setupScrollToTop();
    setupCurrentYear();
    initEmailJS();
    initScrollReveal();
}
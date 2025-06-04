// Footer component
export function renderFooter() {
    return `
    <footer class="bg-slate-800 text-slate-300 py-12 text-center">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-4">
                <a href="https://www.linkedin.com/in/bagus-ahmad-khoirul-ato-70a13b2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-slate-400 hover:text-indigo-400 mx-3 text-2xl transition-colors"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/bagusahmadka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-slate-400 hover:text-indigo-400 mx-3 text-2xl transition-colors"><i class="fab fa-github"></i></a>
                <a href="https://www.instagram.com/bagusahmaad?utm_source=qr&igsh=cHc3NGx5a3J0ZnV5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-slate-400 hover:text-indigo-400 mx-3 text-2xl transition-colors"><i class="fab fa-instagram"></i></a>
                <a href="mailto:bagusahmadka@gmail.com" aria-label="Email" class="text-slate-400 hover:text-indigo-400 mx-3 text-2xl transition-colors"><i class="fas fa-envelope"></i></a>
            </div>
            <p class="text-sm">&copy; <span id="currentYear"></span> Bagus Ahmad Khoirul Ato'. Hak Cipta Dilindungi.</p>
        </div>
    </footer>

    <button id="scrollTopBtn" class="hidden fixed bottom-5 right-5 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50" aria-label="Gulir ke atas">
        <i class="fas fa-arrow-up"></i>
    </button>
    `;
}

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
    const emailJsPublicKey = 'bdIEEDBhWuW1DCwTt'; // Hardcoded dari .env
    
    if (window.emailjs) {
        emailjs.init({ publicKey: emailJsPublicKey });
    }
}

// Setup all utility functions
export function setupUtils() {
    setupScrollToTop();
    setupCurrentYear();
    initEmailJS();
}
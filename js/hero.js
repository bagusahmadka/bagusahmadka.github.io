export function renderHero() {
    // Gunakan path relatif yang konsisten
    const profileImagePath = './assets/images/2.jpg';
    
    return `
    <header id="hero" class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
                <img src="${profileImagePath}" 
                     alt="Foto Profil Saya" 
                     class="w-full h-full rounded-full shadow-2xl border-4 border-white object-cover"
                     onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Crect width=\'160\' height=\'160\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'18\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError%3C/text%3E%3C/svg%3E';">
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Halo, Saya <span class="text-yellow-300">Bagus Ahmad Khoirul Ato'</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Seorang mahasiswa Politeknik Negeri Semarang program studi D3-Teknik Informatika yang bersemangat dalam menciptakan solusi digital yang inovatif dan pengalaman pengguna yang luar biasa.
            </p>
            <div class="space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#projects" class="inline-block bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <i class="fas fa-briefcase mr-2"></i> Lihat Proyek Saya
                </a>
                <a href="#contact" class="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <i class="fas fa-envelope mr-2"></i> Hubungi Saya
                </a>
            </div>
        </div>
    </header>
    `;
}
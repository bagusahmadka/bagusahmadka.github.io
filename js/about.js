export function renderAbout() {
    // Gunakan path relatif yang konsisten
    const aboutImagePath = './assets/images/same.jpg';
    
    return `
    <section id="about" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-indigo-600 after:rounded-full">
                Tentang Saya
            </h2>
            <div class="flex flex-col md:flex-row items-center md:space-x-12">
                <div class="md:w-1/3 mb-8 md:mb-0">
                    <div class="rounded-xl shadow-xl w-full max-w-sm mx-auto overflow-hidden">
                        <img src="${aboutImagePath}" 
                             alt="Foto Tentang Saya" 
                             class="w-full h-full object-cover"
                             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError%3C/text%3E%3C/svg%3E';">
                    </div>
                </div>
                <div class="md:w-2/3 text-slate-600 text-lg leading-relaxed">
                    <p class="mb-4">
                        Selamat datang di portofolio digital saya! Saya adalah seorang mahasiswa program studi D3-Teknik Informatika dengan pengalaman lebih dari 2 tahun di bidang Freelancer pembuatan website dan juga jurnal. Saya memiliki hasrat mendalam untuk selalu mengeksplorasi hal baru dan juga selalu tertarik untuk beradaptasi dengan teknologi terbaru seperti penggunaan AI dalam menunjang Freelancer yang saya jalani.
                    </p>
                    <p class="mb-4">
                        Perjalanan saya di dunia teknologi dimulai semenjak saya berkuliah di program studi teknik informatika polines. Sejak itu, saya terus mengasah kemampuan dan pengetahuan saya dalam bidang Leadership, Public Speaking dan konsep-konsep untuk membuat sebuah aplikasi berbasis mobile dan juga website. Saya percaya bahwa kombinasi antara kreativitas, logika, dan perhatian terhadap detail adalah kunci untuk menghasilkan karya berkualitas tinggi.
                    </p>
                    <p class="mb-6">
                        Di luar pekerjaan saya sebagai seorang mahasiswa dan Freelancer, saya gemar membaca buku Atomic Habbit, The Psychology of Money dan masih banyak lagi, mengikuti organisasi mahasiswa dan terpilih menjadi ketua nya. Saya selalu antusias untuk belajar hal baru, suka bersosialisasi dengan orang baru dan berprinsip agar saya bisa membawa dampak positif untuk lingkungan sekitar saya.
                    </p>
                    <a href="#contact" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
                        Mari Terhubung <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}
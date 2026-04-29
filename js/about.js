export function renderAbout() {
    // Gunakan path relatif yang konsisten
    const aboutImagePath = './public/images/same.jpg';
    
    return `
    <section id="about" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-indigo-600 after:rounded-full">
                Tentang Saya
            </h2>
            <div class="flex flex-col md:flex-row items-center md:space-x-12">
                <div class="md:w-1/3 mb-8 md:mb-0 reveal reveal-left">
                    <div class="rounded-xl shadow-xl w-full max-w-sm mx-auto overflow-hidden">
                        <img src="${aboutImagePath}" 
                             alt="Foto Tentang Saya" 
                             class="w-full h-full object-cover"
                             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23CCCCCC\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%23FFFFFF\'%3EError%3C/text%3E%3C/svg%3E';">
                    </div>
                </div>
                <div class="md:w-2/3 text-slate-600 text-lg leading-relaxed reveal reveal-right">
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
                    <!-- Tombol Unduh CV -->
                    <button id="download-cv-btn" type="button" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 ml-4 mt-4 md:mt-0">
                        <i class="fas fa-download mr-2"></i>Unduh CV
                    </button>
                </div>
            </div>
        </div>
    </section>
    `;
}

// Fungsi untuk generate dan download CV PDF
export function setupDownloadCV() {
    document.addEventListener('click', async function(e) {
        const btn = e.target.closest('#download-cv-btn');
        if (btn) {
            e.preventDefault();
            
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Membuat PDF...';
            btn.disabled = true;

            try {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({
                    unit: 'pt',
                    format: 'a4'
                });

                let yPos = 40;
                const leftMargin = 40;
                const rightMargin = 555;
                const contentWidth = rightMargin - leftMargin;

                // 1. Kotak abu-abu di kanan atas
                doc.setFillColor(100, 100, 100); 
                doc.rect(550, 0, 45, 190, 'F');

                // 2. Foto Profil
                try {
                    const imgUrl = './public/images/same.jpg';
                    const img = await new Promise((resolve, reject) => {
                        const image = new Image();
                        image.crossOrigin = 'Anonymous';
                        image.onload = () => resolve(image);
                        image.onerror = reject;
                        image.src = imgUrl;
                    });
                    doc.addImage(img, 'JPEG', leftMargin, 30, 105, 135);
                } catch (imgErr) {
                    console.warn('Gagal memuat gambar untuk PDF', imgErr);
                    doc.setFillColor(200, 200, 200);
                    doc.rect(leftMargin, 30, 105, 135, 'F');
                }

                // 3. Header Text
                const textStartX = 160;
                doc.setFont('times', 'bold');
                doc.setFontSize(22);
                doc.setTextColor(0, 0, 0);
                doc.text("Bagus Ahmad Khoirul Ato'", textStartX, 50);

                doc.setFont('times', 'normal');
                doc.setFontSize(11);
                
                let headerY = 75;
                const lineSpacing = 16;
                
                doc.text("Address : Jl. Gondang timur 1, Tembalang, Semarang, Jawa Tengah", textStartX, headerY);
                headerY += lineSpacing;
                doc.text("Phone : +62 889-5912-877", textStartX, headerY);
                headerY += lineSpacing;
                doc.text("Email : bagusahmadka@gmail.com", textStartX, headerY);
                headerY += lineSpacing;
                doc.text("Linkedin : linkedin.com/in/bagus-ahmad-khoirul-ato-70a13b2ab", textStartX, headerY);
                headerY += lineSpacing;
                doc.text("Website : https://bagusahmadka.github.io/", textStartX, headerY);

                yPos = 185;

                // Helper untuk Judul Section
                const addSectionTitle = (title) => {
                    if (yPos > 780) { doc.addPage(); yPos = 40; }
                    
                    doc.setFont('times', 'bold');
                    doc.setFontSize(14);
                    doc.text(title, leftMargin, yPos);
                    
                    yPos += 5;
                    doc.setLineWidth(1);
                    doc.setDrawColor(0, 0, 0);
                    doc.line(leftMargin, yPos, rightMargin, yPos);
                    
                    yPos += 15;
                };

                // Helper untuk Bullet Points
                const addBullet = (text, indent = 10) => {
                    doc.setFont('times', 'normal');
                    doc.setFontSize(11);
                    
                    const bulletX = leftMargin + indent;
                    const textX = bulletX + 12;
                    const maxTextWidth = rightMargin - textX;
                    
                    const splitText = doc.splitTextToSize(text, maxTextWidth);
                    
                    if (yPos + (splitText.length * 14) > 800) { doc.addPage(); yPos = 40; }
                    
                    doc.circle(bulletX + 3, yPos - 4, 2, 'F');
                    
                    if (splitText.length > 1) {
                        doc.text(splitText, textX, yPos); // fallback left align
                    } else {
                        doc.text(text, textX, yPos);
                    }
                    
                    yPos += splitText.length * 14 + 4;
                };

                // --- SUMMARY ---
                addSectionTitle('Summary');
                doc.setFont('times', 'normal');
                doc.setFontSize(11);
                const summaryText = "I am a D3 Informatics Engineering student with more than 2 years of experience in website and journal freelancing. I have a deep desire to always explore new things and also always interested in adapting to the latest technology such as the use of AI in supporting my Freelancer. My journey in the world of technology began when I studied at Polines Informatics Engineering Study Program. Since then, I continue to hone my skills and knowledge in the field of Leadership, Public Speaking and concepts to create mobile-based applications and websites.";
                
                const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
                doc.text(summaryLines, leftMargin, yPos);
                yPos += summaryLines.length * 14 + 15;

                // --- EDUCATION ---
                addSectionTitle('Education');
                doc.setFont('times', 'normal');
                doc.setFontSize(11);
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("2023 - 2026 | State Polytechnic of Semarang | Diploma in Informatics Engineering", leftMargin, yPos);
                yPos += 14;
                doc.text("Relevant coursework in Web Development Design as well as Mobile Applications", leftMargin, yPos);
                yPos += 14;
                doc.text("IPK: 3.88", leftMargin, yPos);
                yPos += 20;

                // --- INTERNSHIP EXPERIENCE ---
                addSectionTitle('Internship Experience');
                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("August 2025 - January 2026 | CV.Agra Prima Indonesia | Full Stack Developer", leftMargin, yPos);
                yPos += 16;
                addBullet("During my internship as a Full-Stack Developer, I developed and maintained web applications from start to finish, from system design and feature implementation to performance optimization. I also built RESTful APIs, managed databases and data structures, and performed debugging, testing, and optimization to ensure the system remained stable and responsive. Additionally, I managed version control using Git and maintained code quality through documentation and best development practices.");
                yPos += 10;

                // --- ACADEMIC PROJECT ---
                addSectionTitle('Academic Project');
                
                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Project Based Learning for the creation of eRecruitment Website for MIKA GROUP", leftMargin, yPos);
                yPos += 16;
                addBullet("Working on Frontend in its applicant view");
                addBullet("Working on the Backend for all Frontends");
                addBullet("Creating Database and managing github repository");
                addBullet("Controlling all applicant side");
                yPos += 10;

                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Project Based Learning for Univgo Mobile App development", leftMargin, yPos);
                yPos += 16;
                addBullet("Holds the login and register features for users along with the backend");
                addBullet("Perform Database creation");
                addBullet("Control the github repository");
                yPos += 10;

                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Creating a Website Mitra Jaya Print for CV. Agra Prima Indonesia", leftMargin, yPos);
                yPos += 16;
                addBullet("This website is used to view the product catalog, place printing orders, specify designs or requirements, upload files, make payments, and track order status online.");
                yPos += 10;

                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Creating a Flutter-based mobile application for waste classifier app", leftMargin, yPos);
                yPos += 16;
                addBullet("This app is designed to support sustainable waste management by helping users identify recyclable materials through image recognition.");
                yPos += 10;

                // --- ORGANIZATIONAL EXPERIENCE ---
                addSectionTitle('Organizational Experience');
                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Juni 2024 - Juni 2025 | Leader of Rohis Polines | UKM Jazirah", leftMargin, yPos);
                yPos += 16;
                addBullet("is fully responsible for the overall operation of the organization, from planning and implementation to the evaluation of work programs. He ensures that every activity aligns with the organization's vision and mission, coordinates all executive members, and makes strategic decisions to achieve the established goals.");
                addBullet("Additionally, he is responsible for mentoring members, maintaining good relations with both internal and external campus stakeholders, and ensuring proper administrative procedures and organizational transparency. He also plays a crucial role in advancing campus outreach and fostering an Islamic, conducive, and sustainable environment.");
                yPos += 10;

                // --- SKILLS ---
                addSectionTitle('Skills');
                
                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Hard Skill", leftMargin, yPos);
                yPos += 16;
                const hardSkills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Laravel", "React", "MySQL", "GitHub", "Figma"];
                hardSkills.forEach(skill => addBullet(skill));
                yPos += 5;

                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Soft Skill", leftMargin, yPos);
                yPos += 16;
                const softSkills = ["Problem Solving", "Critical Thinking", "Time Management"];
                softSkills.forEach(skill => addBullet(skill));
                yPos += 5;

                doc.setFont('times', 'bold');
                if (yPos > 780) { doc.addPage(); yPos = 40; }
                doc.text("Languages", leftMargin, yPos);
                yPos += 16;
                addBullet("Indonesian");
                addBullet("English");

                doc.save("CV_BagusAhmadKhoirulAto.pdf");

            } catch (error) {
                console.error("Kesalahan saat generate PDF:", error);
                alert("Maaf, terjadi kesalahan saat membuat CV.");
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        }
    });
}


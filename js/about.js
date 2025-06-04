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
        if (e.target && e.target.id === 'download-cv-btn') {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                unit: 'pt',
                format: 'a4'
            });

            // Header: Nama besar
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(22);
            doc.setTextColor(18, 61, 112); // Biru tua
            doc.text("BAGUS AHMAD KHOIRUL ATO’", 40, 35); // dari 60 jadi 35

            // Kontak: label tebal, isi normal
            doc.setFontSize(12);
            doc.setTextColor(33, 37, 41); // Hitam
            let y = 55; // dari 85 jadi 55
            const kontak = [
                ["Address:", "Tembalang, Semarang"],
                ["Phone:", "+62 889-5912-877"],
                ["Email:", "bagusahmadka@gmail.com"],
                ["Website:", "https://bagusahmadka.github.io/"]
            ];
            kontak.forEach(([label, value]) => {
                doc.setFont('helvetica', 'bold');
                doc.text(label, 40, y);
                doc.setFont('helvetica', 'normal');
                doc.text(value, 120, y);
                y += 18;
            });

            // Garis bawah header
            doc.setDrawColor(180, 180, 180);
            doc.setLineWidth(1);
            doc.line(40, y + 5, doc.internal.pageSize.getWidth() - 40, y + 5);

            // SUMMARY
            y += 30;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(44, 62, 80);
            doc.text("SUMMARY", 40, y);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const summaryText = "I am a D3 Informatics Engineering student with more than 2 years of experience in website and journal freelancing. I have a deep desire to always explore new things and also always interested in adapting to the latest technology such as the use of AI in supporting my Freelancer. My journey in the world of technology began when I studied at Polines Informatics Engineering Study Program. Since then, I continue to hone my skills and knowledge in the field of Leadership, Public Speaking and concepts to create mobile-based applications and websites.";
            const summaryLines = doc.splitTextToSize(summaryText, 515);
            doc.text(summaryLines, 40, y + 18);

            // Hitung posisi Y setelah summary
            y = y + 18 + summaryLines.length * 14 + 10;

            // WORK EXPERIENCE
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(44, 62, 80);
            doc.text("WORK EXPERIENCE", 40, y);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);

            doc.autoTable({
                startY: y + 10,
                theme: 'plain',
                styles: { fontSize: 11, textColor: [60, 60, 60] },
                columnStyles: {
                    0: { cellWidth: 350 },
                    1: { cellWidth: 180, halign: 'right' }
                },
                body: [
                    [
                        { content: 'Project Based Learning for the creation of eRecruitment Website for MIKA GROUP\n• Working on Frontend in its applicant view\n• Working on the Backend for all Frontends\n• Creating Database and managing github repository\n• Controlling all applicant side' },
                        { content: 'Mar 2025 - Present' }
                    ],
                    [
                        { content: 'Project Based Learning for Univgo Mobile App development\n• Holds the login and register features for users along with the backend\n• Perform Database creation\n• Control the github repository' },
                        { content: 'Aug 2024 - Dec 2024' }
                    ],
                    [
                        { content: 'Creating a Website for the Home Affairs Ministry of BEM Polines\n• Creating a website to track geolocation for picket schedules in BEM.' },
                        { content: 'Mar 2024 - Mar 2024' }
                    ]
                ]
            });

            // Organizational Experience
            y = doc.lastAutoTable.finalY + 15;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(44, 62, 80);
            doc.text("ORGANIZATIONAL EXPERIENCE", 40, y);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);

            doc.autoTable({
                startY: y + 10,
                theme: 'plain',
                styles: { fontSize: 11, textColor: [60, 60, 60] },
                columnStyles: {
                    0: { cellWidth: 350 },
                    1: { cellWidth: 180, halign: 'right' }
                },
                body: [
                    [
                        { content: 'Leader of Rohis Polines Student Activity Unit' },
                        { content: 'Aug 2024 - May 2025' }
                    ],
                    [
                        { content: 'Leader of Rohis Senior High School 2 Demak' },
                        { content: 'June 2021 - June 2023' }
                    ],
                    [
                        { content: 'Leader of Rohis Senior High School 2 Demak' },
                        { content: 'June 2018 - June 2019' }
                    ]
                ]
            });

            // Education
            y = doc.lastAutoTable.finalY + 10;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(44, 62, 80);
            doc.text("EDUCATION", 40, y);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);

            doc.autoTable({
                startY: y + 10,
                theme: 'plain',
                styles: { fontSize: 11, textColor: [60, 60, 60], cellPadding: 2 }, // cellPadding kecil
                margin: { bottom: 0 }, // hilangkan margin bawah
                columnStyles: {
                    0: { cellWidth: 350 },
                    1: { cellWidth: 180, halign: 'right' }
                },
                body: [
                    [
                        { content: 'Diploma in Informatics Engineering\nState Polytechnic of Semarang\n• Relevant coursework in Web Development Design as well as Mobile Applications\n• IPK : 3.93' },
                        { content: 'Aug 2023 - Present' }
                    ],
                    [
                        { content: 'Senior High School 2 Demak\n• Specialization in Mathematics and Science (MIPA)' },
                        { content: 'July 2020 - July 2023' }
                    ],
                    [
                        { content: 'Junior High School 5 Demak\n• Specialization in Science' },
                        { content: 'July 2017 - July 2019' }
                    ]
                ]
            });

            // Additional Information
            y = doc.lastAutoTable.finalY + 10; // kurangi jarak antar section
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(44, 62, 80);
            doc.text("ADDITIONAL INFORMATION", 40, y);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const additionalText = 
                "• Technical Skills: a little familiar with html, dart, typescript, and react and laravel frameworks and familiar with using MySQL.\n" +
                "• Languages: English, Indonesian.\n" +
                "• Communication\n" +
                "• Public Speaking\n" +
                "• Leadership";
            const additionalLines = doc.splitTextToSize(additionalText, 515);

            // Tulis setiap baris dengan spasi konsisten (misal 14pt)
            let addY = y + 18;
            additionalLines.forEach(line => {
                doc.text(line, 40, addY);
                addY += 14;
            });

            doc.save("CV_BagusAhmadKhoirulAto.pdf");
        }
    });
}
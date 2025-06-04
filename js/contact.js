export function renderContact() {
    return `
    <section id="contact" class="py-16 md:py-24 bg-slate-100">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-indigo-600 after:rounded-full">
                Hubungi Saya
            </h2>
            <form id="contact-form" class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                <p class="text-center text-slate-600 mb-6">Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk mengirim pesan.</p>
                <div class="mb-5">
                    <label for="name" class="block text-slate-700 text-sm font-semibold mb-2">Nama Lengkap <span class="text-red-500">*</span></label>
                    <input type="text" id="name" name="from_name" required
                           class="shadow-sm appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow">
                </div>
                <div class="mb-5">
                    <label for="email" class="block text-slate-700 text-sm font-semibold mb-2">Alamat Email <span class="text-red-500">*</span></label>
                    <input type="email" id="email" name="reply_to" required
                           class="shadow-sm appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow">
                </div>
                <div class="mb-6">
                    <label for="message" class="block text-slate-700 text-sm font-semibold mb-2">Pesan <span class="text-red-500">*</span></label>
                    <textarea id="message" name="message" rows="5" required
                              class="shadow-sm appearance-none border border-slate-300 rounded-lg w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" id="submit-contact-form"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        <i class="fas fa-paper-plane mr-2"></i> Kirim Pesan
                    </button>
                </div>
                <p id="form-status" class="text-center mt-4 text-sm"></p>
            </form>
        </div>
    </section>
    `;
}

export function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-contact-form');
    
    if (!contactForm || !formStatus || !submitBtn) return;

    // Hardcoded nilai dari .env (karena vanilla JS tidak otomatis load .env)
    const emailJsPublicKey = 'bdIEEDBhWuW1DCwTt'; 
    const serviceID = 'service_d2jlbd9'; 
    const templateID = 'template_m53wf4s'; 

    // Inisialisasi EmailJS dengan public key
    if (window.emailjs) {
        emailjs.init({
            publicKey: emailJsPublicKey
        });
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
        formStatus.textContent = 'Mengirim pesan Anda...';
        formStatus.className = 'text-center mt-4 text-sm text-slate-600';
            
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formStatus.textContent = 'Pesan berhasil terkirim! Terima kasih.';
                formStatus.className = 'text-center mt-4 text-sm text-green-600 font-semibold';
                contactForm.reset();
            }, (err) => {
                formStatus.textContent = 'Gagal mengirim pesan. Silakan coba lagi atau hubungi saya langsung.';
                formStatus.className = 'text-center mt-4 text-sm text-red-600 font-semibold';
                console.error('EmailJS error:', JSON.stringify(err));
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Kirim Pesan';
            });
    });
}

export function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-contact-form');
    
    if (!contactForm || !formStatus || !submitBtn) return;

    // Hardcoded nilai dari .env (karena vanilla JS tidak otomatis load .env)
    const emailJsPublicKey = 'jDXVI9-bt5aOXR0OT'; 
    const serviceID = 'service_nw36rif'; 
    const templateID = 'template_dgsr099'; 

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
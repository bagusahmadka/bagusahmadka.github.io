

export function setupHero() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const roles = ["Web Developer", "Freelancer", "Mahasiswa Teknik Informatika"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Kecepatan menghapus
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Kecepatan mengetik
        }

        // Jika selesai mengetik satu kata penuh
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Jeda sebelum mulai menghapus
        } 
        // Jika selesai menghapus seluruh kata
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Jeda sebelum mengetik kata baru
        }

        setTimeout(type, typingSpeed);
    }

    // Mulai efek setelah sedikit jeda animasi hero selesai
    setTimeout(type, 1000);
}
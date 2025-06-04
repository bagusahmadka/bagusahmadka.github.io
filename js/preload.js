export function preloadImages() {
    // Daftar gambar yang perlu di-preload
    const imagesToPreload = [
        './assets/images/2.jpg',
        './assets/images/same.jpg',
        './assets/images/1p.jpg',
        './assets/images/p2.jpg',
        './assets/images/6.jpg'
    ];
    
    // Preload gambar
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
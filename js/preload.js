export function preloadImages() {
    // Daftar gambar yang perlu di-preload
    const imagesToPreload = [
        './public/images/2.jpg',
        './public/images/same.jpg',
        './public/images/1p.jpg',
        './public/images/p2.jpg',
        './public/images/6.jpg'
    ];
    
    // Preload gambar
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
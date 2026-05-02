import { setupContactForm } from './contact.js';
import { setupHero } from './hero.js';
import { setupNavbar } from './navbar.js';
import { preloadImages } from './preload.js';
import { setupProjects } from './projects.js';
import { setupSkills } from './skills.js';
import { setupUtils } from './utils.js';

// Preload gambar
preloadImages();

// Render Components
document.addEventListener('DOMContentLoaded', function() {
    // Render all components
    // (Semua komponen kini sudah berada di index.html secara statis untuk SEO)
    
    // Initialize all interactive elements
    setupNavbar();
    setupHero();
    setupProjects();
    setupSkills();
    setupContactForm();
    setupUtils();
});
import { renderAbout } from './about.js';
import { renderContact, setupContactForm } from './contact.js';
import { renderHero } from './hero.js';
import { renderNavbar, setupNavbar } from './navbar.js';
import { preloadImages } from './preload.js';
import { renderProjects, setupProjects } from './projects.js';
import { renderSkills, setupSkills } from './skills.js';
import { renderFooter, setupUtils } from './utils.js';

// Preload gambar
preloadImages();

// Render Components
document.addEventListener('DOMContentLoaded', function() {
    // Render all components
    document.getElementById('navbar').innerHTML = renderNavbar();
    document.getElementById('hero').innerHTML = renderHero();
    document.getElementById('about').innerHTML = renderAbout();
    document.getElementById('projects').innerHTML = renderProjects();
    document.getElementById('skills').innerHTML = renderSkills();
    document.getElementById('contact').innerHTML = renderContact();
    document.getElementById('footer').innerHTML = renderFooter();
    
    // Initialize all interactive elements
    setupNavbar();
    setupProjects();
    setupSkills();
    setupContactForm();
    setupUtils();
});
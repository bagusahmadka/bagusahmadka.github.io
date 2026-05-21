export const skillsData = [
    {
        category: "Bahasa Pemrograman",
        skills: [
            { name: 'HTML5', iconClass: 'fab fa-html5', color: '#e44d26' },
            { name: 'CSS3', iconClass: 'fab fa-css3-alt', color: '#264de4' },
            { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#f7df1e' },
            { name: 'TypeScript', iconClass: 'fab fa-js-square', color: '#3178c6' },
            { name: 'Python', iconClass: 'fab fa-python', color: '#3776ab' },
            { name: 'Dart', iconClass: 'fas fa-code', color: '#0175c2' }
        ]
    },
    {
        category: "Framework & Library",
        skills: [
            { name: 'Laravel', iconClass: 'fab fa-laravel', color: '#ff2d20' },
            { name: 'React', iconClass: 'fab fa-react', color: '#61dbfb' },
            { name: 'Next.js', iconClass: 'fas fa-layer-group', color: '#ffffff' },
            { name: 'Flutter', iconClass: 'fas fa-mobile-screen', color: '#02569b' },
            { name: 'Tailwind CSS', iconClass: null, color: '#06b6d4',
              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 54 33" style="margin:0 auto 12px;display:block"><g clip-path="url(#a)"><path fill="#06b6d4" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.736 33.109 15 38.25 15c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C35.006 2.264 32.641 0 27 0ZM13.5 15C6.3 15 1.8 18.6 0 25.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.756 27.736 19.121 30 24.75 30c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C21.506 17.264 19.141 15 13.5 15Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v33H0z"/></clipPath></defs></svg>`
            },
            { name: 'Flask', iconClass: 'fas fa-flask', color: '#ffffff' },
            { name: 'TensorFlow', iconClass: 'fas fa-brain', color: '#ff6f00' },
            { name: 'Filament', iconClass: 'fas fa-cubes', color: '#f59e0b' }
        ]
    },
    {
        category: "Database",
        skills: [
            { name: 'MySQL', iconClass: 'fas fa-database', color: '#e79b39ff' },
            { name: 'PostgreSQL', iconClass: 'fas fa-database', color: '#336791' }
        ]
    },
    {
        category: "Tools & Deployment",
        skills: [
            { name: 'Git & GitHub', iconClass: 'fab fa-github', color: '#adbac7' },
            { name: 'Postman', iconClass: 'fas fa-paper-plane', color: '#ff6c37' },
            { name: 'Docker', iconClass: 'fab fa-docker', color: '#2496ed' },
            { name: 'Vercel', iconClass: 'fas fa-caret-up', color: '#ffffff' },
            { name: 'Firebase', iconClass: 'fas fa-fire', color: '#ffca28' },
            { name: 'Linux', iconClass: 'fab fa-linux', color: '#fcc624' },
            { name: 'Figma', iconClass: 'fab fa-figma', color: '#a259ff' }
        ]
    }
];

export function setupSkills() {
    const skillsListContainer = document.getElementById('skills-list');
    if (!skillsListContainer) return;

    skillsListContainer.innerHTML = '';
    // Ubah class container utama agar tidak langsung grid, karena sekarang ada kategori
    skillsListContainer.className = 'skills-categories-container';

    skillsData.forEach((categoryData, catIndex) => {
        const catWrapper = document.createElement('div');
        catWrapper.style.marginBottom = '48px';

        const catTitle = document.createElement('h3');
        catTitle.className = 'reveal reveal-up';
        catTitle.style.fontSize = '1.3rem';
        catTitle.style.fontWeight = '700';
        catTitle.style.color = 'var(--text-primary)';
        catTitle.style.marginBottom = '24px';
        catTitle.style.textAlign = 'center';
        catTitle.textContent = categoryData.category;
        catWrapper.appendChild(catTitle);

        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        categoryData.skills.forEach((skill, index) => {
            let iconHtml = '';
            if (skill.svg) {
                iconHtml = skill.svg;
            } else {
                iconHtml = `<i class="${skill.iconClass}" style="font-size:2.8rem;color:${skill.color};margin-bottom:12px;display:block;"></i>`;
            }

            const div = document.createElement('div');
            div.className = 'reveal reveal-up';
            div.style.transitionDelay = `${(index * 50)}ms`;
            div.innerHTML = `
                <div class="skill-card">
                    <div class="skill-icon">${iconHtml}</div>
                    <p class="skill-name">${skill.name}</p>
                </div>
            `;
            grid.appendChild(div);
        });

        catWrapper.appendChild(grid);
        skillsListContainer.appendChild(catWrapper);
    });
}
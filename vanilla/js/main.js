// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenuFirst = document.getElementById('mobileMenu');
    const mobileMenuLinks = mobileMenuFirst.getElementsByTagName('a');

    menuBtn.addEventListener('click', () => {
        mobileMenuFirst.classList.toggle('translate-x-full');
        document.body.classList.toggle('overflow-hidden');
    });

    // Close mobile menu when clicking a link
    Array.from(mobileMenuLinks).forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuFirst.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // Experience Data
    const experiences = [
        {
            company: 'Senior Full Stack Developer',
            duration: '2023 - Present',
            description: 'Leading development of modern web applications using React, TypeScript, and Laravel. Implementing responsive designs and optimizing performance.',
            technologies: ['React', 'TypeScript', 'Laravel', 'TailwindCSS']
        },
        {
            company: 'Full Stack Developer',
            duration: '2021 - 2023',
            description: 'Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality solutions.',
            technologies: ['Vue.js', 'PHP', 'MySQL', 'Docker']
        },
        {
            company: 'Frontend Developer',
            duration: '2019 - 2021',
            description: 'Created responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs.',
            technologies: ['JavaScript', 'HTML', 'CSS', 'React']
        }
    ];

    // Populate Experience Section
    const experienceContainer = document.querySelector('#experience .space-y-12');
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-card';
        expElement.setAttribute('data-aos', 'fade-in');
        expElement.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${exp.company}</h3>
            <p class="text-teal-400 mb-4">${exp.duration}</p>
            <p class="mb-4">${exp.description}</p>
            <div class="flex flex-wrap gap-2">
                ${exp.technologies.map(tech => `
                    <span class="px-3 py-1 bg-navy-light rounded-full text-sm">${tech}</span>
                `).join('')}
            </div>
        `;
        experienceContainer.appendChild(expElement);
    });

    // Projects Data
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with modern web technologies showcasing my projects and skills.',
            technologies: ['React', 'TailwindCSS', 'TypeScript'],
            github: 'https://github.com/janzengo/portfolio'
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce platform with user authentication, product management, and payment integration.',
            technologies: ['Laravel', 'Vue.js', 'MySQL'],
            github: 'https://github.com/janzengo/ecommerce'
        }
    ];

    // Populate Projects Section
    const projectsContainer = document.querySelector('#projects .grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card p-6';
        projectElement.setAttribute('data-aos', 'fade-in');
        projectElement.innerHTML = `
            <h3 class="text-xl font-bold mb-4">${project.title}</h3>
            <p class="mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => `
                    <span class="px-3 py-1 bg-navy rounded-full text-sm">${tech}</span>
                `).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="text-teal-400 hover:text-teal-300 transition-colors">
                View on GitHub →
            </a>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Initialize mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    // Skip if elements don't exist
    if (!mobileMenuButton || !mobileMenu || !menuIcon || !closeIcon) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Function to toggle the mobile menu
    function toggleMobileMenu(event) {
        // Prevent default behavior
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const isOpen = mobileMenu.classList.contains('translate-y-[0]');

        if (isOpen) {
            // Close menu
            mobileMenu.classList.remove('translate-y-[0]', 'opacity-100');
            mobileMenu.classList.add('translate-y-[-100%]', 'opacity-0');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        } else {
            // Open menu
            mobileMenu.classList.remove('translate-y-[-100%]', 'opacity-0');
            mobileMenu.classList.add('translate-y-[0]', 'opacity-100');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
    }

    // Toggle menu when the mobile menu button is clicked
    mobileMenuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMobileMenu(event);
    });

    // Close menu when clicking on mobile menu links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Mobile toggle buttons
    const mobileParticleToggle = document.getElementById('mobile-particle-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    // Sync mobile toggle buttons with desktop ones
    if (mobileParticleToggle) {
        mobileParticleToggle.addEventListener('click', function() {
            const particleToggle = document.getElementById('particle-toggle');
            if (particleToggle) particleToggle.click();
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) themeToggle.click();
        });
    }

    // Close the mobile menu when window is resized to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && mobileMenu.classList.contains('translate-y-[0]')) {
            toggleMobileMenu();
        }
    });

    // Initialize theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (!themeToggle) return;

    // Check for saved theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Theme toggle button click handler
    themeToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });

    // Initialize particle toggle functionality
    const particleToggle = document.getElementById('particle-toggle');
    const particlesContainer = document.getElementById('particles-js');

    if (!particleToggle || !particlesContainer) return;

    // Check for saved particle preference
    if (localStorage.particlesEnabled === 'false') {
        particlesContainer.style.opacity = '0';
        particlesContainer.style.pointerEvents = 'none';
        particleToggle.classList.add('opacity-50');
    }

    // Particle toggle button click handler
    particleToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        const isEnabled = particlesContainer.style.opacity !== '0';
        particlesContainer.style.opacity = isEnabled ? '0' : '1';
        particlesContainer.style.pointerEvents = isEnabled ? 'none' : 'auto';
        particleToggle.classList.toggle('opacity-50');
        localStorage.particlesEnabled = !isEnabled;
    });

    // Typed.js initialization
    new Typed('#typed-name', {
        strings: ['Janzen Go'],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function() {
            // Start title animation after name is complete
            new Typed('#typed-title', {
                strings: ['Full Stack Developer'],
                typeSpeed: 50,
                showCursor: false
            });
        }
    });

    // GSAP animations for hero section
    gsap.from('.hero h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero h2', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.hero p', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all section headings and content blocks
    document.querySelectorAll('section > div').forEach((el) => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // Initialize theme toggle functionality
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.checked = currentTheme === 'light';

        themeToggle.addEventListener('change', function() {
            const theme = this.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
});

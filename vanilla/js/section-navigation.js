        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section[id]');
            const navItems = document.querySelectorAll('.nav-item');
            
            function updateActiveSection() {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navItems.forEach(item => {
                            item.classList.remove('active');
                            if (item.getAttribute('data-section') === sectionId) {
                                item.classList.add('active');
                            }
                        });
                    }
                });
            }

            // Update active section on scroll
            window.addEventListener('scroll', updateActiveSection);
            updateActiveSection(); // Initial check

            // Smooth scroll to section when clicking nav items
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = item.getAttribute('data-section');
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
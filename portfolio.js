document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funkcionalita mobilního menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            
            // Animace ikonky burger menu (volitelné zkřížení linek)
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('open')) {
                spans[0].style.transform = 'translateY(7px) rotate(45deg)';
                spans[1].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
        });

        // Zavřít menu po kliknutí na odkaz (u mobilů)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            });
        });
    }

    // 2. Detekce aktivní sekce při scrollování a podtržení v menu
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Výpočet s tolerancí pro fixní hlavičku
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
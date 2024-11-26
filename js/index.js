document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    function animateCounter() {
        const counterElement = document.getElementById('experience-counter');
        const targetNumber = 37;
        let currentNumber = 0;

        const increment = () => {
            if (currentNumber < targetNumber) {
                currentNumber++;
                counterElement.textContent = currentNumber;
                requestAnimationFrame(increment);
            }
        };

        increment();
    }

    // Función para verificar si la sección está visible en el viewport
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Activar la animación cuando la sección de "Años de experiencia" esté visible
    window.addEventListener('scroll', function () {
        const experienceSection = document.querySelector('#experience-counter');
        if (isElementInView(experienceSection) && !experienceSection.classList.contains('counted')) {
            experienceSection.classList.add('counted');
            animateCounter();
        }
    });
});


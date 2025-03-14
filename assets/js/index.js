window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("hidden");
});
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".section");

        function revealSections() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight * 0.85;

                if (sectionTop < windowHeight) {
                    section.classList.add("show");
                }
            });
        }

        window.addEventListener("scroll", revealSections);
        revealSections(); // Para ativar se já estiver na tela
    });document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 50; // Ajuste para menus fixos
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
                    
                    smoothScrollTo(targetPosition, 800); // Tempo de animação: 800ms
                }
            });
        });
    
        function smoothScrollTo(targetPosition, duration) {
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;
    
            function animationStep(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const easing = easeInOutCubic(progress);
    
                window.scrollTo(0, startPosition + distance * easing);
    
                if (timeElapsed < duration) {
                    requestAnimationFrame(animationStep);
                }
            }
    
            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
    
            requestAnimationFrame(animationStep);
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector("#nav_mobile");
        const menuLinks = document.querySelectorAll("#nav_mobile a"); // Seleciona todos os links dentro do menu
    
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    
        // Fecha o menu ao clicar em qualquer link dentro dele
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
            });
        });
    });
    
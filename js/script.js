document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdown = document.querySelector('.dropdown');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');

    // 1. Mostrar/Ocultar Menú en Dispositivos Móviles
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // 2. Despliegue de Cursos por Click exclusivamente en pantallas táctiles/móviles
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                // Si está en la página de cursos, dejamos que las anclas funcionen, sino abrimos menú
                if (!window.location.pathname.includes('cursos.html')) {
                    e.preventDefault();
                }
                dropdown.classList.toggle('open-submenu');
            }
        });
    }
});

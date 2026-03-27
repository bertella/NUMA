document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const modal = document.getElementById('modal-luxury');
    const openModalBtn = document.getElementById('open-newsletter');
    const closeModalBtn = document.getElementById('close-modal');
    const form = document.getElementById('luxury-form');

    // 1. Efecto Scroll en Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Lógica de Modal
    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll
    };

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Espera a la animación
        document.body.style.overflow = '';
    };

    // Mostrar modal automáticamente a los 4 segundos (solo una vez)
    if (!localStorage.getItem('modalSeen')) {
        setTimeout(() => {
            modal.style.display = 'flex';
            setTimeout(openModal, 10);
            localStorage.setItem('modalSeen', 'true');
        }, 4000);
    }

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        setTimeout(openModal, 10);
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 3. Manejo del Formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.innerText = "BIENVENIDO A LA ÉLITE";
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            closeModal();
        }, 2000);
    });
});
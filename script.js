document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalLead');
    const closeBtn = document.getElementById('closeModal');
    const leadForm = document.getElementById('leadForm');
    const submitBtn = document.getElementById('submitBtn');

    // 1. Mostrar modal después de 5 segundos si no ha sido cerrado en esta sesión
    if (!sessionStorage.getItem('numaModalClosed')) {
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 5000);
    }

    // 2. Función para cerrar modal
    const closeModal = () => {
        modal.style.display = 'none';
        sessionStorage.setItem('numaModalClosed', 'true');
    };

    // Evento click en 'X'
    closeBtn.addEventListener('click', closeModal);

    // 3. Cerrar al hacer clic fuera del contenido (en el overlay)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 4. Lógica de envío de formulario
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular carga y cambio de estado
        submitBtn.innerText = 'PROCESANDO...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.style.backgroundColor = '#D9C5B2'; // Color Kraft
            submitBtn.style.color = '#111';
            submitBtn.innerText = '¡BIENVENIDO A LA ÉLITE!';
            
            // Cerrar automáticamente después de un éxito
            setTimeout(() => {
                closeModal();
            }, 2000);
        }, 1500);
    });
});
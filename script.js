document.addEventListener('DOMContentLoaded', () => {
    const form = id => document.getElementById(id);
    const contactForm = form('contact-form');

    // Manejo del envío del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! TheFoxy547 te responderá pronto.');
            contactForm.reset();
        });
    }

    // Reproducción de video al pasar el cursor sobre las tarjetas de juegos
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const video = card.querySelector('video');

        if (video) {
            card.addEventListener('mouseenter', () => {
                video.currentTime = 0;
                video.play().catch(error => {
                    console.log("Reproducción bloqueada o archivo no encontrado:", error);
                });
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
});
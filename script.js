document.addEventListener('DOMContentLoaded', () => {
    const form = id => document.getElementById(id);
    const contactForm = form('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! TheFoxy547 te responderá pronto.');
            contactForm.reset();
        });
    }
});
// Add event listener to window load
window.addEventListener('load', () => {
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Add fade-in animation to sections
    sections.forEach((section) => {
        section.classList.add('fade-in');
    });

    // Add event listener to scroll
    window.addEventListener('scroll', () => {
        // Get current scroll position
        const scrollPosition = window.scrollY;

        // Get hero section
        const heroSection = document.getElementById('hero');

        // Add background image to hero section on scroll
        if (scrollPosition > 100) {
            heroSection.style.backgroundImage = 'linear-gradient(to bottom, #333, #555)';
        } else {
            heroSection.style.backgroundImage = 'none';
        }
    });
});
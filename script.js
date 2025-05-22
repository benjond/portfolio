document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('#navbarNav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic Greeting
    const greetingElement = document.getElementById('dynamic-greeting');
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting = "Salut !"; // Default greeting in French

        if (currentHour < 12) {
            greeting = "Bonjour !";
        } else if (currentHour < 18) {
            greeting = "Bon après-midi !";
        } else {
            greeting = "Bonsoir !";
        }
        greetingElement.textContent = greeting;
        // Optional: Add some style to the greeting if not already done in HTML/CSS
        // greetingElement.style.fontStyle = 'italic';
        // greetingElement.style.color = '#555';
    }
});

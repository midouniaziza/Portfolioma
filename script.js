       // Smooth scrolling for navigation links
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectCategories = document.querySelectorAll('.project-category');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all project categories
            projectCategories.forEach(category => category.classList.remove('active'));
            
            // Show the target category
            const targetCategory = this.getAttribute('data-target');
            document.getElementById(targetCategory).classList.add('active');
        });
    });

    // Scroll effects
    window.addEventListener('scroll', function() {
        // Header shadow on scroll
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form submission with WhatsApp integration
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Format the message for WhatsApp
            const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/212606507474?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Message prepared! You will be redirected to WhatsApp to complete sending.');
        });
    }

    // Add responsive classes for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe elements for animation
    document.querySelectorAll('.project-card, .skill-category, .about-image, .about-text').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });






    










    


    const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Afficher/Cacher le menu sur clic
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

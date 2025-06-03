// Données des projets pour les modals
const projectsData = {
    ecommerce: {
        title: "Site E-commerce",
        image: "https://via.placeholder.com/800x400/3498db/ffffff?text=Site+E-commerce",
        description: `
            <p>Une application de vente en ligne complète développée avec les dernières technologies web.</p>
            
            <h5>Fonctionnalités principales :</h5>
            <ul>
                <li>Catalogue de produits avec filtres avancés</li>
                <li>Panier d'achat avec gestion des quantités</li>
                <li>Système de paiement sécurisé (Stripe, PayPal)</li>
                <li>Gestion des commandes et suivi de livraison</li>
                <li>Interface d'administration complète</li>
                <li>Système de notation et commentaires</li>
                <li>Newsletter et notifications</li>
            </ul>
            
            <h5>Défis techniques relevés :</h5>
            <p>Optimisation des performances pour gérer un grand catalogue de produits, implémentation d'un système de cache Redis, sécurisation des transactions et protection contre les attaques courantes.</p>
            
            <h5>Résultats :</h5>
            <p>Augmentation de 40% des ventes en ligne pour le client, amélioration de l'expérience utilisateur avec un taux de conversion de 3.2%.</p>
        `,
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"]
    },
    dashboard: {
        title: "Dashboard Analytics",
        image: "https://via.placeholder.com/800x400/e74c3c/ffffff?text=Dashboard+Analytics",
        description: `
            <p>Interface de visualisation de données en temps réel pour l'analyse business et le monitoring.</p>
            
            <h5>Fonctionnalités principales :</h5>
            <ul>
                <li>Graphiques interactifs avec Chart.js et D3.js</li>
                <li>Données en temps réel via WebSocket</li>
                <li>Filtres dynamiques et exports personnalisés</li>
                <li>Alertes automatiques basées sur des seuils</li>
                <li>Dashboard personnalisable par utilisateur</li>
                <li>API REST complète pour l'intégration</li>
                <li>Système de rapports automatisés</li>
            </ul>
            
            <h5>Architecture technique :</h5>
            <p>Microservices avec API Gateway, base de données time-series InfluxDB pour les métriques, système de cache distribué pour optimiser les performances des requêtes complexes.</p>
            
            <h5>Impact :</h5>
            <p>Réduction de 60% du temps d'analyse des données pour les équipes métier, amélioration de la prise de décision grâce à la visualisation en temps réel.</p>
        `,
        technologies: ["Vue.js", "Chart.js", "WebSocket", "InfluxDB", "Express.js", "Docker"]
    },
    mobile: {
        title: "App Mobile",
        image: "https://via.placeholder.com/800x400/9b59b6/ffffff?text=App+Mobile",
        description: `
            <p>Application mobile cross-platform pour la gestion collaborative de projets et tâches.</p>
            
            <h5>Fonctionnalités principales :</h5>
            <ul>
                <li>Gestion de projets avec méthodes Agile</li>
                <li>Collaboration en temps réel entre équipes</li>
                <li>Notifications push intelligentes</li>
                <li>Mode hors-ligne avec synchronisation</li>
                <li>Intégration calendrier et outils externes</li>
                <li>Chat intégré et partage de fichiers</li>
                <li>Rapports et analytics de productivité</li>
            </ul>
            
            <h5>Défis techniques :</h5>
            <p>Synchronisation des données en mode hors-ligne, optimisation des performances sur différents appareils, implémentation d'un système de notifications push personnalisées.</p>
            
            <h5>Adoption :</h5>
            <p>Plus de 10,000 utilisateurs actifs, note moyenne de 4.7/5 sur les stores, amélioration de 35% de la productivité des équipes utilisatrices.</p>
        `,
        technologies: ["React Native", "Firebase", "Redux", "WebRTC", "Node.js", "MongoDB"]
    }
};

// Fonction pour ouvrir le modal avec les détails du projet
function openProjectModal(projectKey) {
    console.log('openProjectModal appelée avec:', projectKey);
    
    const project = projectsData[projectKey];
    if (!project) {
        console.error('Projet non trouvé:', projectKey);
        return;
    }

    // Vérifier que Bootstrap est chargé
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap n\'est pas encore chargé');
        return;
    }

    // Mettre à jour le titre du modal
    const modalLabel = document.getElementById('projectModalLabel');
    if (modalLabel) {
        modalLabel.textContent = project.title;
    }
    
    // Créer le contenu du modal
    const modalBody = document.getElementById('projectModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-detail-image">
            <div class="project-detail-content">
                ${project.description}
                <div class="tech-stack">
                    <h6><strong>Technologies utilisées :</strong></h6>
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Afficher le modal
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        console.error('Élément modal non trouvé');
    }
}

// Rendre la fonction disponible globalement
window.openProjectModal = openProjectModal;

// Gestion de la navigation smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du scroll pour la navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Gestion des liens de navigation actifs
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Appel initial

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de succès
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simulation d'envoi (remplacer par votre logique d'envoi réelle)
            setTimeout(() => {
                submitBtn.textContent = 'Message envoyé !';
                submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                
                // Reset du formulaire après 2 secondes
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
            }, 1500);
        });
    }

    // Animation d'apparition des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec animation
    document.querySelectorAll('.project-card, .contact-info, .skill-badge').forEach(el => {
        observer.observe(el);
    });

    // Effet parallax léger pour la section à propos - SUPPRIMÉ pour éviter le chevauchement
    // const aboutSection = document.getElementById('about');
    // if (aboutSection) {
    //     window.addEventListener('scroll', () => {
    //         const scrolled = window.pageYOffset;
    //         const parallaxSpeed = 0.5;
    //         aboutSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    //     });
    // }
});

// Fonction utilitaire pour fermer le menu mobile après clic sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
});

// Performance - Lazy loading des images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});


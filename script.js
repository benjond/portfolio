// Initialisation d'EmailJS
(function() {
  emailjs.init("l4VzJ6LWo_f-FJRU0"); // Votre Public Key EmailJS
})();

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  
  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Formulaire soumis'); // Debug

      const statusMessage = document.getElementById('status-message');
      statusMessage.innerHTML = '<div class="alert alert-info">Envoi en cours...</div>';

      // Debug: afficher les valeurs du formulaire
      console.log('Données du formulaire:', {
        from_name: this.from_name.value,
        from_email: this.from_email.value,
        subject: this.subject.value,
        message: this.message.value
      });

      // Test avec différents noms de variables pour correspondre au template
      const templateParams = {
        // Essayons plusieurs variantes de noms
        from_name: this.from_name.value,
        user_name: this.from_name.value,
        name: this.from_name.value,
        
        from_email: this.from_email.value,
        user_email: this.from_email.value,
        email: this.from_email.value,
        reply_to: this.from_email.value,
        
        subject: this.subject.value,
        message_subject: this.subject.value,
        
        message: this.message.value,
        user_message: this.message.value,
        
        to_name: "Benjamin",
        to_email: "jondbenjamin@gmail.com"
      };

      console.log('Paramètres envoyés à EmailJS:', templateParams);

      // Paramètres pour l'auto-reply
      const autoReplyParams = {
        from_name: this.from_name.value,
        user_name: this.from_name.value,
        name: this.from_name.value,
        
        from_email: this.from_email.value,
        user_email: this.from_email.value,
        email: this.from_email.value,
        reply_to: this.from_email.value,
        
        subject: this.subject.value,
        message_subject: this.subject.value,
        
        message: this.message.value,
        user_message: this.message.value
      };

      console.log('Paramètres auto-reply envoyés:', autoReplyParams);

      // Envoyer l'auto-reply (pour le visiteur) - template existant
      const sendAutoReply = emailjs.send("service_f9l1tsl", "template_1whkv5w", autoReplyParams);
      
      // Envoyer l'email principal (pour vous) - template créé
      const sendMainEmail = emailjs.send("service_f9l1tsl", "template_ry70fvc", templateParams);

      // Attendre que les deux emails soient envoyés
      Promise.all([sendMainEmail, sendAutoReply])
        .then(function(responses) {
          console.log('SUCCESS! Emails envoyés:', responses);
          statusMessage.innerHTML = '<div class="alert alert-success">Message envoyé avec succès ! Vous avez reçu une confirmation.</div>';
        })
        .catch(function(error) {
          console.error('FAILED...', error);
          console.error('Détails de l\'erreur:', error);
          statusMessage.innerHTML = '<div class="alert alert-danger">Erreur lors de l\'envoi: ' + (error.text || error.message || 'Erreur inconnue') + '</div>';
        });

      // Réinitialiser le formulaire après un délai
      setTimeout(() => {
        this.reset();
      }, 1000);
    });
  }

  // Gestion de la navigation smooth scroll et mise à jour de la navbar
  // Smooth scroll pour les liens de navigation
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mise à jour de la navbar active selon la section visible
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight - 50;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  // Écouter le scroll pour mettre à jour la navbar
  window.addEventListener('scroll', updateActiveNav);
  
  // Initialiser au chargement
  updateActiveNav();
});

// Fonction pour ouvrir les modales de compétences
function openProjectModal(competenceId) {
  const modalTitle = document.getElementById('projectModalLabel');
  const modalBody = document.getElementById('projectModalBody');

  let title = '';
  let content = '';

  switch (competenceId) {
    case 'competence1':
      title = 'Compétence 1';
      content = `
        <img src="figure1.png" alt="Figure 1" class="img-fluid mb-2" style="max-width: 100%; height: auto;">
        <div class="text-center mb-4">
          <h6 class="fw-bold">Figure 1</h6>
          <p class="text-muted small">Interface d'une application web de e-commerce avec gestion de panier d'achat développée en utilisant Flask</p>
        </div>
        
        <div class="competence-description">
          <p>La <strong>Figure 1</strong> illustre une capture d'écran partielle d'une <strong>application web</strong> que j'ai développée avec <strong>Flask</strong>, dans le cadre d'un projet de <strong>gestion d'un panier d'achat en ligne</strong>. Cette application permet à un utilisateur authentifié de consulter un catalogue d'articles, de filtrer les produits selon plusieurs critères (type, nom, prix), de sélectionner des déclinaisons (tailles, modèles), d'ajouter des articles au panier, puis de finaliser la commande.</p>
          
          <p>L'interface est générée dynamiquement via des <strong>templates HTML</strong> utilisant la syntaxe <strong>Jinja2</strong>, qui injectent les données extraites d'une base <strong>MariaDB</strong>. Les données sont récupérées par des <strong>requêtes SQL spécifiques</strong>, exécutées dans les routes Flask en <strong>Python</strong>. La partie gauche de l'écran affiche les cartes produits, générées en boucle à partir du backend, comprenant le nom, le prix, une image, un bouton d'ajout au panier, ainsi que les déclinaisons et le stock disponible.</p>
          
          <p>Le <strong>panier</strong>, visible en partie centrale supérieure, est stocké en <strong>session utilisateur</strong> et se met à jour dynamiquement. Chaque entrée indique le produit, la déclinaison choisie, la quantité, le prix unitaire et le sous-total. J'ai ajouté des contrôles permettant d'ajuster la quantité ou de supprimer un article, entraînant des mises à jour synchronisées côté serveur via les routes Flask.</p>
          
          <p>Un aspect crucial de ce projet a été la <strong>gestion des stocks et déclinaisons</strong>. Chaque produit peut avoir plusieurs déclinaisons (tailles, couleurs, modèles) avec des <strong>stocks distincts</strong> stockés en base de données. J'ai implémenté un système de vérification en temps réel qui contrôle la disponibilité avant chaque ajout au panier, empêchant ainsi les commandes de produits en rupture de stock. Les <strong>déclinaisons</strong> sont gérées par des tables relationnelles permettant de maintenir la cohérence des données et d'offrir une flexibilité dans la gestion des variantes produits. L'interface affiche dynamiquement le <strong>stock disponible</strong> pour chaque déclinaison, et les contrôles de quantité dans le panier sont limités par le stock réel, garantissant l'intégrité des commandes.</p>
          
          <p>Sur la droite, j'ai conçu un <strong>formulaire HTML</strong> proposant plusieurs filtres, dont les critères sont transmis au backend pour filtrer la requête SQL et ajuster le rendu des articles affichés. Ce projet m'a obligé à gérer finement les sessions, à structurer des <strong>requêtes SQL robustes</strong> garantissant la cohérence des données, et à assurer une articulation claire entre la logique métier backend et la présentation frontend. L'interface utilisateur a été réalisée en <strong>HTML/CSS</strong> et stylisée avec <strong>Bootstrap</strong>, garantissant un affichage responsive et une expérience utilisateur fluide.</p>
          

          <p>Pour cela j'ai acquis la maîtrise du <strong>framework Flask</strong> pour définir les routes, gérer les sessions utilisateur et orchestrer les échanges client-serveur ; la maîtrise du langage <strong>SQL</strong> et de <strong>MariaDB</strong> pour écrire des requêtes efficaces et dynamiques permettant d'appliquer des filtres complexes et garantir la cohérence des données ; mes compétences en <strong>templating avec Jinja2</strong> pour générer des pages HTML dynamiques et réutilisables ; la gestion de la <strong>logique métier côté backend</strong> pour synchroniser l'état du panier en session et assurer la validité des opérations d'ajout, modification ou suppression ; enfin, le <strong>développement frontend</strong> en HTML/CSS avec Bootstrap, garantissant une interface ergonomique, accessible et responsive.</p>
                    
          
          <p>Concernant mon niveau de maîtrise, je considère avoir acquis une <strong>bonne compréhension des principes fondamentaux</strong> du développement web <strong>full-stack</strong> et une capacité à implémenter des fonctionnalités complexes dans un cadre cohérent. Cependant, je sais que certaines optimisations restent possibles, notamment au niveau de la <strong>gestion des performances</strong> côté base de données (indexation, optimisation des requêtes), ainsi qu'une meilleure <strong>modularisation du code Flask</strong> pour faciliter la maintenance et les tests. Par ailleurs, je pourrais améliorer l'ergonomie de l'interface utilisateur et renforcer la <strong>gestion des erreurs</strong> pour rendre l'application plus robuste.</p>
        </div>
      `;
      break;
    case 'competence2':
      title = 'Compétence 2';
      content = `
        <img src="figure2.png" alt="Figure 2" class="img-fluid mb-2" style="max-width: 100%; height: auto;">
        <div class="text-center mb-4">
          <h6 class="fw-bold">Figure 2</h6>
          <p class="text-muted small">Environnement de déploiement d'une application web avec configuration Apache, Gunicorn et VirtualBox</p>
        </div>
        
        <div class="competence-description">
          <p>La <strong>Figure 2</strong> montre l'environnement de déploiement d'une <strong>application web</strong> que j'ai développée en groupe. La partie gauche de l'écran montre une session de terminal au sein d'une <strong>machine virtuelle Oracle VirtualBox</strong>, qui héberge l'ensemble de l'infrastructure serveur. On peut y observer la configuration d'un <strong>VirtualHost Apache</strong> pour le domaine sae203gunicorn.com, où <strong>Apache</strong> est utilisé comme <strong>reverse proxy</strong> pour rediriger les requêtes vers un socket géré par <strong>Gunicorn</strong>, le serveur d'application <strong>WSGI</strong> qui exécute mon code <strong>Python</strong>. Le terminal affiche également la structure du projet, les interactions avec la base de données <strong>MariaDB</strong> en ligne de commande, et des informations sur la configuration réseau du serveur. Sur la droite, le navigateur web affiche le résultat final de cette configuration : la page d'authentification de l'application, prête à être servie aux utilisateurs.</p>
          
          <p>Dans ce projet, j'ai mobilisé des savoirs et savoir-faire variés en matière d'<strong>administration de systèmes</strong> et de <strong>déploiement web</strong>. Ma maîtrise de l'environnement <strong>LAMP</strong> (Linux, Apache, MariaDB, PHP mais pas de PHP dans ce projet mais <strong>Python</strong> et <strong>Flask</strong> à la place) a été fondamentale pour configurer un serveur fonctionnel, en assurant l'articulation entre le serveur web <strong>Apache</strong> et le serveur d'application <strong>Gunicorn</strong> et la base de données <strong>MariaDB</strong>. J'ai mis en place un <strong>reverse proxy</strong> pour optimiser la gestion des requêtes et j'ai configuré le chiffrement <strong>SSL/TLS</strong> pour sécuriser les communications, comme le montrent les directives dans le fichier de configuration Apache. L'utilisation de <strong>VirtualBox</strong> m'a permis de travailler dans un environnement virtualisé, créant ainsi une infrastructure isolée, reproductible et fidèle aux conditions d'une mise en production réelle. Ce projet m'a obligé à gérer finement l'interaction entre ces différentes briques technologiques, à garantir leur communication via les <strong>sockets</strong> et les <strong>configurations réseau</strong>, et à assurer une architecture cohérente et maintenable.</p>
          
          <p>Concernant mon niveau de maîtrise, je considère avoir acquis une <strong>bonne compréhension des principes du déploiement</strong> d'applications web <strong>full-stack</strong>, de la configuration du système d'exploitation jusqu'à l'application servie à l'utilisateur. J'ai su concevoir et mettre en œuvre une <strong>chaîne de déploiement complète</strong> et fonctionnelle. Cependant, je suis conscient que des optimisations sont possibles, notamment en matière de <strong>performance serveur</strong> par un réglage plus fin de <strong>Gunicorn</strong> et d'<strong>Apache</strong>, ou par la mise en place de mécanismes de <strong>cache</strong>. À l'avenir, je pourrais faire évoluer cette architecture vers une <strong>conteneurisation avec Docker</strong> pour améliorer la portabilité et l'automatisation du déploiement, et renforcer ainsi la robustesse et l'évolutivité de l'ensemble.</p>
        </div>
      `;
      break;
    default:
      title = 'Compétence';
      content = '<p>Aucune description disponible pour cette compétence.</p>';
  }

  modalTitle.textContent = title;
  modalBody.innerHTML = content;

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
}
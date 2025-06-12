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
        <img src="figure1.png" alt="Figure 1" class="img-fluid mb-4" style="max-width: 100%; height: auto;">
        
        <div class="competence-description">
          <p>La <strong>Figure 1</strong> illustre une capture d'écran partielle d'une <strong>application web</strong> que j'ai développée avec <strong>Flask</strong>, dans le cadre d'un projet de <strong>gestion d'un panier d'achat en ligne</strong>. Cette application permet à un utilisateur authentifié de consulter un catalogue d'articles, de filtrer les produits selon plusieurs critères (type, nom, prix), de sélectionner des déclinaisons (tailles, modèles), d'ajouter des articles au panier, puis de finaliser la commande.</p>
          
          <p>L'interface est générée dynamiquement via des <strong>templates HTML</strong> utilisant la syntaxe <strong>Jinja2</strong>, qui injectent les données extraites d'une base <strong>MariaDB</strong>. Les données sont récupérées par des <strong>requêtes SQL spécifiques</strong>, exécutées dans les routes Flask en <strong>Python</strong>. La partie gauche de l'écran affiche les cartes produits, générées en boucle à partir du backend, comprenant le nom, le prix, une image, un bouton d'ajout au panier, ainsi que les déclinaisons et le stock disponible.</p>
          
          <p>Le <strong>panier</strong>, visible en partie centrale supérieure, est stocké en <strong>session utilisateur</strong> et se met à jour dynamiquement. Chaque entrée indique le produit, la déclinaison choisie, la quantité, le prix unitaire et le sous-total. J'ai ajouté des contrôles permettant d'ajuster la quantité ou de supprimer un article, entraînant des mises à jour synchronisées côté serveur via les routes Flask.</p>
          
          <p>Un aspect crucial de ce projet a été la <strong>gestion des stocks et déclinaisons</strong>. Chaque produit peut avoir plusieurs déclinaisons (tailles, couleurs, modèles) avec des <strong>stocks distincts</strong> stockés en base de données. J'ai implémenté un système de vérification en temps réel qui contrôle la disponibilité avant chaque ajout au panier, empêchant ainsi les commandes de produits en rupture de stock. Les <strong>déclinaisons</strong> sont gérées par des tables relationnelles permettant de maintenir la cohérence des données et d'offrir une flexibilité dans la gestion des variantes produits. L'interface affiche dynamiquement le <strong>stock disponible</strong> pour chaque déclinaison, et les contrôles de quantité dans le panier sont limités par le stock réel, garantissant l'intégrité des commandes.</p>
          
          <p>Sur la droite, j'ai conçu un <strong>formulaire HTML</strong> proposant plusieurs filtres, dont les critères sont transmis au backend pour filtrer la requête SQL et ajuster le rendu des articles affichés. Ce projet m'a obligé à gérer finement les sessions, à structurer des <strong>requêtes SQL robustes</strong> garantissant la cohérence des données, et à assurer une articulation claire entre la logique métier backend et la présentation frontend. L'interface utilisateur a été réalisée en <strong>HTML/CSS</strong> et stylisée avec <strong>Bootstrap</strong>, garantissant un affichage responsive et une expérience utilisateur fluide.</p>
          

          <p>Dans ce projet, j'ai mobilisé plusieurs savoirs et savoir-faire : la maîtrise du <strong>framework Flask</strong> pour définir les routes, gérer les sessions utilisateur et orchestrer les échanges client-serveur ; la maîtrise du langage <strong>SQL</strong> et de <strong>MariaDB</strong> pour écrire des requêtes efficaces et dynamiques permettant d'appliquer des filtres complexes et garantir la cohérence des données ; mes compétences en <strong>templating avec Jinja2</strong> pour générer des pages HTML dynamiques et réutilisables ; la gestion de la <strong>logique métier côté backend</strong> pour synchroniser l'état du panier en session et assurer la validité des opérations d'ajout, modification ou suppression ; enfin, le <strong>développement frontend</strong> en HTML/CSS avec Bootstrap, garantissant une interface ergonomique, accessible et responsive.</p>
                    
          
          <p>Concernant mon niveau de maîtrise, je considère avoir acquis une <strong>bonne compréhension des principes fondamentaux</strong> du développement web <strong>full-stack</strong> et une capacité à implémenter des fonctionnalités complexes dans un cadre cohérent. Cependant, je sais que certaines optimisations restent possibles, notamment au niveau de la <strong>gestion des performances</strong> côté base de données (indexation, optimisation des requêtes), ainsi qu'une meilleure <strong>modularisation du code Flask</strong> pour faciliter la maintenance et les tests. Par ailleurs, je pourrais améliorer l'ergonomie de l'interface utilisateur et renforcer la <strong>gestion des erreurs</strong> pour rendre l'application plus robuste.</p>
        </div>
      `;
      break;
    case 'competence2':
      title = 'Compétence 2';
      content = `
        <p>Détails de ma seconde compétence :</p>
        <ul>
          <li>Frameworks maîtrisés</li>
          <li>Méthodologies appliquées</li>
          <li>Certifications obtenues</li>
          <li>Expérience pratique</li>
        </ul>
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
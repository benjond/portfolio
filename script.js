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

      // Envoyer l'auto-reply (pour le visiteur) - template existant
      const sendAutoReply = emailjs.send("service_f9l1tsl", "template_1whkv5w", {
        name: this.from_name.value,
        email: this.from_email.value,
        subject: this.subject.value,
        message: this.message.value
      });
      
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

// Fonction pour ouvrir les modales de projets
function openProjectModal(projectId) {
  const modalTitle = document.getElementById('projectModalLabel');
  const modalBody = document.getElementById('projectModalBody');

  let title = '';
  let content = '';

  switch (projectId) {
    case 'ecommerce':
      title = 'Site E-commerce';
      content = `
        <p>Site complet de vente en ligne :</p>
        <ul>
          <li>Gestion des produits, catégories et stocks</li>
          <li>Panier dynamique et responsive</li>
          <li>Paiement sécurisé via Stripe</li>
          <li>Espace admin pour gérer les commandes</li>
        </ul>
      `;
      break;
    case 'dashboard':
      title = 'Dashboard Analytics';
      content = `
        <p>Plateforme de suivi de données en temps réel :</p>
        <ul>
          <li>Graphiques interactifs (Chart.js, D3.js)</li>
          <li>Connexion API & base de données</li>
          <li>Mises à jour en direct avec WebSockets</li>
          <li>Filtres avancés et tableaux dynamiques</li>
        </ul>
      `;
      break;
    case 'mobile':
      title = 'Application Mobile';
      content = `
        <p>App multi-plateformes pour la gestion de tâches :</p>
        <ul>
          <li>Développée en Flutter</li>
          <li>Synchronisation cloud (Firebase)</li>
          <li>Notifications et rappels</li>
          <li>Partage et collaboration en temps réel</li>
        </ul>
      `;
      break;
    default:
      title = 'Projet';
      content = '<p>Aucune description disponible pour ce projet.</p>';
  }

  modalTitle.textContent = title;
  modalBody.innerHTML = content;

  const modal = new bootstrap.Modal(document.getElementById('projectModal'));
  modal.show();
}
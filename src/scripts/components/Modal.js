export default class Modal {
  constructor(element) {
    // Élément contenant data-component="Modal"
    this.element = element;

    // Bouton ou lien cliquable
    this.link = this.element.querySelector(".voir-code-btn");

    // Récupère le chemin de l'image à partir du data-attribute
    this.imageSrc = this.link.dataset.image;

    // Appelle les fonctions pour créer la modal et ajouter les événements
    this.createModal();
    this.addEvents();
  }

  // -----------------------------------------------------
  // 🧱 Création du DOM de la modal (une seule fois)
  // -----------------------------------------------------
  createModal() {
    // Si la modal n'existe pas encore → on la crée
    if (!document.querySelector(".modal")) {
      this.modal = document.createElement("div");
      this.modal.classList.add("modal");
      this.modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <img src="" alt="Aperçu du code" class="modal-img">
        </div>
      `;
      document.body.appendChild(this.modal);
    } else {
      // Sinon, on réutilise celle déjà créée
      this.modal = document.querySelector(".modal");
    }

    // Références internes
    this.modalImg = this.modal.querySelector(".modal-img");
    this.closeBtn = this.modal.querySelector(".close-modal");
  }

  // -----------------------------------------------------
  // 🎯 Gestion des interactions
  // -----------------------------------------------------
  addEvents() {
    // 1️⃣ Quand on clique sur le lien
    this.link.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche le lien d'agir comme une navigation
      this.openModal(); // Ouvre la modal
    });

    // 2️⃣ Quand on clique sur le bouton de fermeture
    this.closeBtn.addEventListener("click", () => {
      this.closeModal();
    });

    // 3️⃣ Quand on clique sur le fond sombre
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // 4️⃣ (Optionnel) Fermer avec la touche ÉCHAP
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  }

  // -----------------------------------------------------
  // ✨ Ouvre la modal et affiche la bonne image
  // -----------------------------------------------------
  openModal() {
    this.modalImg.src = this.imageSrc; // Met à jour la source de l'image
    this.modal.classList.add("active"); // Affiche la modal
  }

  // -----------------------------------------------------
  // ❌ Ferme la modal
  // -----------------------------------------------------
  closeModal() {
    this.modal.classList.remove("active");
    // Optionnel : délai pour effacer l’image après animation
    setTimeout(() => {
      this.modalImg.src = "";
    }, 200);
  }
}

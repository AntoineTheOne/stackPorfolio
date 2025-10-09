export default class CustomCursor {
  constructor(element) {
    this.element = element;
    this.init();
  }
  init() {
    const cursorDot = document.querySelector("[data-cursor-dot]"); // Sélectionne le point principal du curseur (l'œil blanc)
    const cursorOutline = document.querySelector("[data-cursor-outline]"); // Sélectionne le contour du curseur (l'anneau blanc)
    const eye = cursorDot.querySelector(".eye"); // Sélectionne la pupille noire à l'intérieur du curseur

    // --- Mouvement du curseur personnalisé ---
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX; // Position horizontale de la souris (en pixels)
      const posY = e.clientY; // Position verticale de la souris (en pixels)

      cursorDot.style.left = `${posX}px`; // Place le point blanc au bon endroit (axe X)
      cursorDot.style.top = `${posY}px`; // Place le point blanc au bon endroit (axe Y)

      cursorOutline.style.left = `${posX}px`; // Place le contour au même endroit (axe X)
      cursorOutline.style.top = `${posY}px`; // Place le contour au même endroit (axe Y)

      // Anime le contour pour qu'il suive avec un petit retard (effet fluide)
      cursorOutline.animate(
        {
          left: `${posX}px`, // nouvelle position X
          top: `${posY}px`, // nouvelle position Y
        },
        { duration: 500, fill: "backwards" } // durée de 0.5s, garde la position précédente
      );
    });

    // --- Effet de clignement de l'œil ---
    window.addEventListener("mousedown", () => {
      // Quand on clique
      if (eye) {
        eye.classList.add("blink"); // Ajoute la classe "blink" pour faire cligner la pupille
      }
    });

    window.addEventListener("mouseup", () => {
      // Quand on relâche le clic
      if (eye) {
        eye.classList.remove("blink"); // Retire la classe "blink" pour rouvrir la pupille
      }
    });
  }
}
